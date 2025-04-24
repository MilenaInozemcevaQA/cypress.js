import * as data from "../helpers/default_data.json" 


describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); //Зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//Проверяю цвет кнопки восст.пароль

         cy.get('#mail').type(data.login); // Ввели верный логин
         cy.get('#pass').type(data.password); // Ввели верный пароль
         cy.get('#loginButton').click(); //Нажала войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверяю что после авт.вижу текст
         cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден для пользователя
         
     })

        it('Нерный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); //Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//Проверяю цвет кнопки восст.пароль

        cy.get('#mail').type(data.login); // Ввели верный логин
        cy.get('#pass').type('iLoveqastudio7'); // Ввели неверный пароль
        cy.get('#loginButton').click(); //Нажала войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверяю что после авт.вижу текст
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден для пользователя
        
 })
   
        it('Верный пароль и неверный логин', function () {
        cy.visit('https://login.qa.studio/'); //Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//Проверяю цвет кнопки восст.пароль

        cy.get('#mail').type('germam@dolnikov.ru'); // Ввели неверный логин
        cy.get('#pass').type(data.password); // Ввели верный пароль
        cy.get('#loginButton').click(); //Нажала войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверяю что после авт.вижу текст
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден для пользователя
    
})
 
        it('Негативный кейс валидации', function () {
        cy.visit('https://login.qa.studio/'); //Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//Проверяю цвет кнопки восст.пароль

        cy.get('#mail').type('germandolnikov.ru'); // Ввели логин без @
        cy.get('#pass').type(data.password); // Ввели верный пароль
        cy.get('#loginButton').click(); //Нажала войти

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //Проверяю что после авт.вижу текст
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден для пользователя
        
})

        it('Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); //Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//Проверяю цвет кнопки восст.пароль

        cy.get('#forgotEmailButton').click(); //Нажимаю восстановить пароль
        cy.get('#mailForgot').type('milgeni@bk.ru'); //Ввела почту для восстановления
        cy.get('#restoreEmailButton').click(); //Нажимаю на кнопку отправить код

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //Проверяю на совпадение текст
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден для пользователя

})

        it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); //Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//Проверяю цвет кнопки восст.пароль

        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели логин с стр.буквами
        cy.get('#pass').type(data.password); // Ввели верный пароль
        cy.get('#loginButton').click(); //Нажала войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверяю что после авт.вижу текст
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден для пользователя

})
 })
