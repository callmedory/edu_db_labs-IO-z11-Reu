(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{704:function(n,e,a){"use strict";a.r(e);var t=a(47),s=Object(t.a)({},(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"реалізація-інформаціиного-та-програмного-забезпечення"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#реалізація-інформаціиного-та-програмного-забезпечення"}},[n._v("#")]),n._v(" Реалізація інформаційного та програмного забезпечення")]),n._v(" "),a("h2",{attrs:{id:"_1-sql-скрипт-для-створення-на-початкового-наповнення-бази-даних"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-sql-скрипт-для-створення-на-початкового-наповнення-бази-даних"}},[n._v("#")]),n._v(" 1. SQL-скрипт для створення на початкового наповнення бази даних:")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("-- MySQL Script generated by MySQL Workbench\n-- Sat May 13 12:51:03 2023\n-- Model: New Model    Version: 1.0\n-- MySQL Workbench Forward Engineering\n\nSET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;\nSET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;\nSET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';\n\n-- -----------------------------------------------------\n-- Schema askaboutdb\n-- -----------------------------------------------------\nDROP SCHEMA IF EXISTS `askaboutdb` ;\n\n-- -----------------------------------------------------\n-- Schema askaboutdb\n-- -----------------------------------------------------\nCREATE SCHEMA IF NOT EXISTS `askaboutdb` DEFAULT CHARACTER SET utf8 ;\nUSE `askaboutdb` ;\n\n-- -----------------------------------------------------\n-- Table `askaboutdb`.`Role`\n-- -----------------------------------------------------\nDROP TABLE IF EXISTS `askaboutdb`.`Role` ;\n\nCREATE TABLE IF NOT EXISTS `askaboutdb`.`Role` (\n  `idRole` INT NOT NULL,\n  `name` VARCHAR(45) NULL,\n  `description` VARCHAR(45) NULL,\n  PRIMARY KEY (`idRole`))\nENGINE = InnoDB;\n\n\n-- -----------------------------------------------------\n-- Table `askaboutdb`.`User`\n-- -----------------------------------------------------\nDROP TABLE IF EXISTS `askaboutdb`.`User` ;\n\nCREATE TABLE IF NOT EXISTS `askaboutdb`.`User` (\n  `idUser` INT NOT NULL AUTO_INCREMENT,\n  `username` VARCHAR(45) NULL,\n  `email` VARCHAR(45) NULL,\n  `password` VARCHAR(45) NULL,\n  `Role` INT NULL,\n  PRIMARY KEY (`idUser`),\n  INDEX `Role_idx` (`Role` ASC) VISIBLE,\n  CONSTRAINT `FK_User_Role`\n    FOREIGN KEY (`Role`)\n    REFERENCES `askaboutdb`.`Role` (`idRole`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION)\nENGINE = InnoDB;\n\n\n-- -----------------------------------------------------\n-- Table `askaboutdb`.`State`\n-- -----------------------------------------------------\nDROP TABLE IF EXISTS `askaboutdb`.`State` ;\n\nCREATE TABLE IF NOT EXISTS `askaboutdb`.`State` (\n  `idState` INT NOT NULL,\n  `name` VARCHAR(45) NULL,\n  `description` VARCHAR(150) NULL,\n  PRIMARY KEY (`idState`))\nENGINE = InnoDB;\n\n\n-- -----------------------------------------------------\n-- Table `askaboutdb`.`QuizType`\n-- -----------------------------------------------------\nDROP TABLE IF EXISTS `askaboutdb`.`QuizType` ;\n\nCREATE TABLE IF NOT EXISTS `askaboutdb`.`QuizType` (\n  `idQuizType` INT NOT NULL,\n  `name` VARCHAR(45) NULL,\n  PRIMARY KEY (`idQuizType`))\nENGINE = InnoDB;\n\n\n-- -----------------------------------------------------\n-- Table `askaboutdb`.`Quiz`\n-- -----------------------------------------------------\nDROP TABLE IF EXISTS `askaboutdb`.`Quiz` ;\n\nCREATE TABLE IF NOT EXISTS `askaboutdb`.`Quiz` (\n  `idQuiz` INT NOT NULL,\n  `title` VARCHAR(45) NULL,\n  `description` VARCHAR(150) NULL,\n  `datetime` DATETIME NULL,\n  `QuizType` INT NOT NULL,\n  PRIMARY KEY (`idQuiz`),\n  INDEX `QuizType_idQuizType_idx` (`QuizType` ASC) VISIBLE,\n  CONSTRAINT `FK_Quiz_QuizType`\n    FOREIGN KEY (`QuizType`)\n    REFERENCES `askaboutdb`.`QuizType` (`idQuizType`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION)\nENGINE = InnoDB;\n\n\n-- -----------------------------------------------------\n-- Table `askaboutdb`.`Action`\n-- -----------------------------------------------------\nDROP TABLE IF EXISTS `askaboutdb`.`Action` ;\n\nCREATE TABLE IF NOT EXISTS `askaboutdb`.`Action` (\n  `idAction` INT NOT NULL,\n  `datetime` DATETIME NULL,\n  `comment` VARCHAR(150) NULL,\n  `User` INT NOT NULL,\n  `State` INT NOT NULL,\n  `Quiz` INT NOT NULL,\n  PRIMARY KEY (`idAction`),\n  INDEX `User_IdUser_idx` (`User` ASC) VISIBLE,\n  INDEX `State_idState_idx` (`State` ASC) VISIBLE,\n  INDEX `Quiz_idQuiz_idx` (`Quiz` ASC) VISIBLE,\n  CONSTRAINT `FK_Action_User`\n    FOREIGN KEY (`User`)\n    REFERENCES `askaboutdb`.`User` (`idUser`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION,\n  CONSTRAINT `FK_Action_State`\n    FOREIGN KEY (`State`)\n    REFERENCES `askaboutdb`.`State` (`idState`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION,\n  CONSTRAINT `FK_Action_Quiz`\n    FOREIGN KEY (`Quiz`)\n    REFERENCES `askaboutdb`.`Quiz` (`idQuiz`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION)\nENGINE = InnoDB;\n\n\n-- -----------------------------------------------------\n-- Table `askaboutdb`.`StateResolve`\n-- -----------------------------------------------------\nDROP TABLE IF EXISTS `askaboutdb`.`StateResolve` ;\n\nCREATE TABLE IF NOT EXISTS `askaboutdb`.`StateResolve` (\n  `idStateResolve` INT NOT NULL,\n  `rule` VARCHAR(45) NULL,\n  `State` INT NOT NULL,\n  PRIMARY KEY (`idStateResolve`),\n  INDEX `State_idState_idx` (`State` ASC) VISIBLE,\n  CONSTRAINT `FK_StateResolve_State`\n    FOREIGN KEY (`State`)\n    REFERENCES `askaboutdb`.`State` (`idState`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION)\nENGINE = InnoDB;\n\n\n-- -----------------------------------------------------\n-- Table `askaboutdb`.`QuestionType`\n-- -----------------------------------------------------\nDROP TABLE IF EXISTS `askaboutdb`.`QuestionType` ;\n\nCREATE TABLE IF NOT EXISTS `askaboutdb`.`QuestionType` (\n  `idQuestionType` INT NOT NULL,\n  `name` VARCHAR(45) NULL,\n  PRIMARY KEY (`idQuestionType`))\nENGINE = InnoDB;\n\n\n-- -----------------------------------------------------\n-- Table `askaboutdb`.`Question`\n-- -----------------------------------------------------\nDROP TABLE IF EXISTS `askaboutdb`.`Question` ;\n\nCREATE TABLE IF NOT EXISTS `askaboutdb`.`Question` (\n  `idQuestion` INT NOT NULL,\n  `title` VARCHAR(45) NULL,\n  `content` NVARCHAR(150) NULL,\n  `Quiz` INT NOT NULL,\n  `QuestionType` INT NOT NULL,\n  PRIMARY KEY (`idQuestion`),\n  INDEX `Quiz_idQuiz_idx` (`Quiz` ASC) VISIBLE,\n  INDEX `QuestionType_idx` (`QuestionType` ASC) VISIBLE,\n  CONSTRAINT `FK_Question_Quiz`\n    FOREIGN KEY (`Quiz`)\n    REFERENCES `askaboutdb`.`Quiz` (`idQuiz`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION,\n  CONSTRAINT `FK_Question_QuestionType`\n    FOREIGN KEY (`QuestionType`)\n    REFERENCES `askaboutdb`.`QuestionType` (`idQuestionType`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION)\nENGINE = InnoDB;\n\n\n-- -----------------------------------------------------\n-- Table `askaboutdb`.`Answer`\n-- -----------------------------------------------------\nDROP TABLE IF EXISTS `askaboutdb`.`Answer` ;\n\nCREATE TABLE IF NOT EXISTS `askaboutdb`.`Answer` (\n  `idAnswer` INT NOT NULL,\n  `content` NVARCHAR(150) NULL,\n  `datetime` DATETIME NULL,\n  `Quiz` INT NOT NULL,\n  PRIMARY KEY (`idAnswer`),\n  INDEX `Quiz_idQuiz_idx` (`Quiz` ASC) VISIBLE,\n  CONSTRAINT `FK_Answer_Quiz`\n    FOREIGN KEY (`Quiz`)\n    REFERENCES `askaboutdb`.`Quiz` (`idQuiz`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION)\nENGINE = InnoDB;\n\n\nSET SQL_MODE=@OLD_SQL_MODE;\nSET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;\nSET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;\n\n-- -----------------------------------------------------\n-- Data for table `askaboutdb`.`Role`\n-- -----------------------------------------------------\nSTART TRANSACTION;\nUSE `askaboutdb`;\nINSERT INTO `askaboutdb`.`Role` (`idRole`, `name`, `description`) VALUES (1, 'Admin', 'Administrator role');\nINSERT INTO `askaboutdb`.`Role` (`idRole`, `name`, `description`) VALUES (2, 'Manager', 'Manager role');\nINSERT INTO `askaboutdb`.`Role` (`idRole`, `name`, `description`) VALUES (3, 'User', 'User role');\nINSERT INTO `askaboutdb`.`Role` (`idRole`, `name`, `description`) VALUES (4, 'GuestUser', 'GuestUser role');\n\nCOMMIT;\n\n\n-- -----------------------------------------------------\n-- Data for table `askaboutdb`.`User`\n-- -----------------------------------------------------\nSTART TRANSACTION;\nUSE `askaboutdb`;\nINSERT INTO `askaboutdb`.`User` (`idUser`, `username`, `email`, `password`, `Role`) VALUES (1, 'dory', 'dominica.diem@gmail.com', 'pawwd', 1);\nINSERT INTO `askaboutdb`.`User` (`idUser`, `username`, `email`, `password`, `Role`) VALUES (2, 'imaginativefriend', 'imaginative@gmail.com', 'prool', 3);\nINSERT INTO `askaboutdb`.`User` (`idUser`, `username`, `email`, `password`, `Role`) VALUES (3, 'testsubject', 'test@gmail.com', 'test', 3);\n\nCOMMIT;\n\n\n-- -----------------------------------------------------\n-- Data for table `askaboutdb`.`State`\n-- -----------------------------------------------------\nSTART TRANSACTION;\nUSE `askaboutdb`;\nINSERT INTO `askaboutdb`.`State` (`idState`, `name`, `description`) VALUES (1, 'Completed', 'Action is completed');\nINSERT INTO `askaboutdb`.`State` (`idState`, `name`, `description`) VALUES (2, 'Progressing', 'Action is progressing');\nINSERT INTO `askaboutdb`.`State` (`idState`, `name`, `description`) VALUES (3, 'Canceled', 'Action is canceled');\n\nCOMMIT;\n\n")])])]),a("h2",{attrs:{id:"_2-restfull-сервіс-для-управління-даними"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-restfull-сервіс-для-управління-даними"}},[n._v("#")]),n._v(" 2. RESTfull сервіс для управління даними")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("import fastapi\nfrom fastapi import FastAPI, Request\nfrom fastapi.responses import JSONResponse\nimport pymysql\n\napp = FastAPI()\n\n\nclass DataBase(object):\n\n    def __new__(cls):\n        if not hasattr(cls, 'instance'):\n            cls.instance = super(DataBase, cls).__new__(cls)\n        return cls.instance\n\n    def __init__(self):\n        self.connection = None\n        self.cursor = None\n        self.__connect()\n\n    def __connect(self):\n        self.connection = pymysql.connect(\n            host='localhost',\n            user='root',\n            password='st0Ne_0c3aN',\n            database='askaboutdb',\n        )\n        self.cursor = self.connection.cursor(pymysql.cursors.DictCursor)\n\n    def execute(self, command):\n        self.cursor.execute(command)\n        result = self.cursor.fetchall()\n        self.connection.commit()\n        return result\n\n\n@app.get(\"/api/allusers\")\nasync def get_users():\n    db = DataBase()\n    return JSONResponse(db.execute('SELECT * FROM user'))\n\n\n@app.get('/api/user/{id}')\ndef get_user_by_id(id):\n    db = DataBase()\n    result = db.execute(f'SELECT * FROM user WHERE idUser={id}')\n    if not result:\n        raise fastapi.HTTPException(status_code=404)\n    return JSONResponse(result)\n\n\n@app.post('/api/adduser', status_code=201)\nasync def add_new_user(req: Request):\n    req_dict = await req.json()\n    try:\n        username = req_dict['username']\n        email = req_dict['email']\n        password = req_dict['password']\n        id_role = req_dict['Role']\n    except:\n        raise fastapi.HTTPException(status_code=400)\n    db = DataBase()\n    db.execute(f\"INSERT INTO `user`(`username`, `email`, `password`, `Role`) VALUES ('{username}','{email}','{password}',{id_role});\")\n    return {'message': 'New user added!'}\n\n\n@app.put('/api/updateuser/{id}')\nasync def update_user(id, req: Request):\n    req_dict = await req.json()\n    db = DataBase()\n    for key in req_dict:\n         if not db.execute(f'SELECT * FROM user WHERE idUser={id}'):\n            raise fastapi.HTTPException(status_code=404)\n         db.execute(f'UPDATE user SET {key}=\"{req_dict[key]}\" WHERE idUser={id}')\n    return {\"message\": 'Updated!'}\n\n\n@app.delete('/api/deleteuser/{id}')\ndef delete(id):\n    db = DataBase()\n    if not db.execute(f'SELECT * FROM user WHERE idUser={id}'):\n        raise fastapi.HTTPException(status_code=404)\n    db.execute(f'DELETE FROM `user` WHERE idUser={id}')\n    return {'message': f'User with id={id} deleted'}\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);