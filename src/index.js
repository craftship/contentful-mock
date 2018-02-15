import { join } from 'path';
import server from "./server";

server(process.env.CONTENTFUL_MOCK_DIR || join(__dirname, '.contentful'));
