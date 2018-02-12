import yaml from "js-yaml";
import { join } from "path";
import fs from "fs";
import shortid from "shortid";
import uuid from "uuid/v1";
import Datastore from "nedb-promise";

const CONTENT_PATH = {
  ENTRIES: "/entries"
};

const sessions = new Map();

const getSessionBy = (prop, value) => {
  let currentSession;

  sessions.forEach((v, k) => {
    if (k[prop] === value) {
      currentSession = [k, v];
    }
  });

  if (currentSession) {
    return currentSession[1];
  }

  throw new Error(`Could not find session for ${prop} ${value}`);
};

export const getSessionBySpace = id => getSessionBy("space", id);

export const createSession = dir => {
  const stores = {
    entries: new Datastore()
  };

  const space = shortid.generate();
  const accessToken = uuid();

  const sessionKey = {
    space,
    accessToken
  };

  generateData({
    dir,
    stores
  });

  sessions.set(sessionKey, stores);

  return sessionKey;
};

const convertYaml = file => {
  try {
    return yaml.safeLoad(fs.readFileSync(file, "utf8"));
  } catch (e) {
    console.log(e);
  }
};

const generateEntries = (store, entries) => {
  entries.forEach(async e => {
    const json = convertYaml(e);
    const doc = {
      id: shortid.generate(),
      ...json
    };

    await store.insert(doc);
  });
};

export const generateData = ({ dir, stores }) => {
  const entries = fs.readdirSync(join(dir, CONTENT_PATH.ENTRIES));

  generateEntries(
    stores.entries,
    entries.map(e => join(dir, CONTENT_PATH.ENTRIES, e))
  );
};
