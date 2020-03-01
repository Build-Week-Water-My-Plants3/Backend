const request = require('supertest');
const server = require('./server');
const Users = require('../helpers/users-model');
const Plants = require('../helpers/plants-model');
const db = require('../data/dbConfig');

it('runs the tests', () => {
        expect(true).toBe(true);
      })