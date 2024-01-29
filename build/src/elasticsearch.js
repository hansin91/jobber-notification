"use strict";
// import fs from 'fs';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkConnection = void 0;
const jobber_shared_1 = require("@hansin91/jobber-shared");
const elasticsearch_1 = require("@elastic/elasticsearch");
const config_1 = require("./config");
const log = (0, jobber_shared_1.winstonLogger)(`${config_1.config.ELASTIC_SEARCH_URL}`, 'notificationElasticSearchServer', 'debug');
const elasticSearchClient = new elasticsearch_1.Client({
    node: `${config_1.config.ELASTIC_SEARCH_URL}`,
    auth: {
        username: config_1.config.ELASTIC_SEARCH_USERNAME,
        password: config_1.config.ELASTIC_SEARCH_PASSWORD
    },
    // tls: {
    //   ca: fs.readFileSync('./ca.crt'),
    //   rejectUnauthorized: false
    // }
});
function checkConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        let isConnected = false;
        while (!isConnected) {
            try {
                const health = yield elasticSearchClient.cluster.health({});
                log.info(`NotificationService Elasticsearch health status - ${health.status}`);
                isConnected = true;
            }
            catch (error) {
                log.error('Connection to Elasticsearch failed. Retrying...');
                log.log('error', 'NotificationService checkConnection() method:', error);
            }
        }
    });
}
exports.checkConnection = checkConnection;
//# sourceMappingURL=elasticsearch.js.map