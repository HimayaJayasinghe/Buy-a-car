import mongoose from 'mongoose';
import dns from 'dns';

dns.setServers(['8.8.8.8', '8.8.4.4']);

// Ensure Node's socket connection (dns.lookup) resolves MongoDB Atlas shard domains reliably
const resolver = new dns.promises.Resolver();
resolver.setServers(['8.8.8.8', '8.8.4.4']);

const originalLookup = dns.lookup;
dns.lookup = (hostname, options, callback) => {
    if (typeof options === 'function') {
        callback = options;
        options = {};
    }
    resolver.resolve4(hostname)
        .then(addresses => {
            if (options && options.all) {
                callback(null, addresses.map(a => ({ address: a, family: 4 })));
            } else {
                callback(null, addresses[0], 4);
            }
        })
        .catch(() => {
            originalLookup(hostname, options, callback);
        });
};

const connectDB = async () => {

    try{
        const conn = await mongoose.connect(process.env.MONGO_DB_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    }catch (error){
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;
