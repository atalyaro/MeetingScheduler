-- CREATE DATABASE dailyPlanner;

-- USE dailyPlanner;

-- CREATE TABLE companys(
-- id int auto_increment, name varchar(255), primary key(id));

-- CREATE TABLE meetings(
-- id int auto_increment, description text, start_hour varchar(255), finish_hour varchar(255),
-- date_meeting date, room varchar(255),company_id int, primary key(id), foreign key(company_id) references companys(id));

-- INSERT INTO companys(name)
-- VALUES ("google"),("walla"),("ebay"),("facebook")

-- INSERT INTO meetings(description,start_hour,finish_hour,
-- date_meeting,room,company_id)
-- VALUES("talking about a flight","22:53:05","23:42:20",DATE '2020-12-09',"23B",3),
-- ("bussines","12:07:37","14:01:23",DATE '2021-02-13',"20A",2),
-- ("eating togther lunch","13:11:00","13:45:50",DATE '2021-01-20',"21C",3);