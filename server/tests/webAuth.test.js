const app = require('../index.js');
const { User, Hotplace, Barcode, UserBarcode, sequelize } = require('../models');
const request = require('supertest');
const {queryInterface} = sequelize;


describe('Admin auth test',()=>{
  const adminData ={
    no_ktp : '12345678',
    name: 'admin',
    email: 'admin@mail.com',
    password: 'rahasia',
    phone: '0122233333',
    type: 'admin',
    address: 'jakarta'
  }

  const adminLogin={
    email: 'admin@mail.com',
    password: 'rahasia'
  }
  const adminSalah ={
    email: 'admin@mail.com',
    password: 'salaah'
  }

  describe('POST /loginadmin - login admin',()=>{
    beforeAll(done=>{
      User.create(adminData)
        .then(admin=> {
          done()
        })
        .catch(error => done(error))
    })
    afterAll(done=>{
      queryInterface
        .bulkDelete('Users',{})
        .then(()=>done())
        .catch(error=> done(error))
    })

    test('200 success login',(done)=>{
      request(app)
        .post('/loginadmin')
        .send(adminLogin)
        .then(response=>{
          const {body,status}= response;
          expect(status).toBe(200);
          expect(body).toHaveProperty('access_token',expect.any(String));
          done()
        })
    })

    test('400 wrong pasword',(done)=>{
      request(app)
        .post('/loginadmin')
        .send(adminSalah)
        .then(response=>{
          const {body,status}= response;
          expect(status).toBe(400);
          done()
        })
    })

    test('404 not found',(done)=>{
      request(app)
        .post('/loginadmin')
        .send({
          email: 'salah@mail.com',
          password:'rahasia'
        })
        .then(response=>{
          const {body,status}= response;
          expect(status).toBe(404);
          done()
        })
    })
  })
})