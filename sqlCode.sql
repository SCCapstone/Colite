CREATE TABLE mock_data_table (
            id int not null AUTO_INCREMENT,
            Column1 varchar(255),
            RPM varchar(255),
            WindinV varchar(255),
            WindinA varchar(255),
            WindinA2 varchar(255),
            WindinA3 varchar(255),
            WindinW varchar(255),
            PVinV varchar(255),
            PVinA varchar(255),
            blank varchar(255),
            BatinV varchar(255),
            BatinA varchar(255),
            BatinW varchar(255),
            LED1inV varchar(255),
            LED1inA varchar(255),
            LED1inW varchar(255),
            LED2inV varchar(255),
            LED2inA varchar(255),
            LED2inW varchar(255),
            TempinC varchar(255),
            ExininV varchar(255),
            aDate Date,
            aTime Time,
            PRIMARY KEY (id)
);
LOAD DATA LOCAL INFILE ''
INTO TABLE mock_data_table
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '/n'
IGNORE 1 ROWS;
