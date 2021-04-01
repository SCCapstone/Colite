
create table poles(
    Load1_time1_Set int default 0,
    Load1_time2_Set int default 0,
    Load1_OutMode varchar(30) default 'NIGHT',
    Load2_time1_Set int default 0,
    Load2_time2_Set int default 0,
    Load2_OutMode varchar(30) default 'NIGHT',
    Scale_Mode varchar(30) default 'pv_v',
    Param_Setup_Voltage dec(10,5) default 7.0,
    Work_V_Setup varchar(30) default 'Auto',
    Menu_Password_1 int default 0,
    Menu_Password_2 int default 0,
    Menu_Password_3 int default 0,
    Max_Bat_Limit dec(10,5) default 29.0,
    Over_V_Comeback dec(10,5) default 27.5,
    Low_V_Comeback dec(10,5) default 23.5,
    Low_V_Limit dec(10,5) default 21.0,
    MPPT_Close_V dec(10,5) default 5.0,
    MPPT_Start_V dec(10,5) default 6.0
);

insert into poles (
    Load1_time1_Set,
    Load1_time2_Set,
    Load1_OutMode,
    Load2_time1_Set,
    Load2_time2_Set,
    Load2_OutMode,
    Scale_Mode,
    Param_Setup_Voltage,
    Work_V_Setup,
    Menu_Password_1,
    Menu_Password_2,
    Menu_Password_3,
    Max_Bat_Limit,
    Over_V_Comeback,
    Low_V_Comeback,
    Low_V_Limit,
    MPPT_Close_V,
    MPPT_Start_V
)
values (0,0,'NIGHT',1,1,'NIGHT','pv_v',0,'12V',0,0,0,12,11.9,10,9.9,2,4),
(1,1,'DAY',2,2,'DAY','extern_v',0.1,'24V',1,1,1,12.1,12,10.1,10,2.1,4.1),
(2,2,'NIGHT',3,3,'PWM','pv_v',0.2,'48V',2,2,2,12.2,12.1,10.2,10.1,2.2,4.2),
(3,3,'DAY',4,4,'NIGHT','extern_v',0.3,'Auto',3,3,3,12.3,12.2,10.3,10.2,2.3,4.3),
(4,4,'NIGHT',5,5,'DAY','pv_v',0.4,'12V',4,4,4,12.4,12.3,10.4,10.3,2.4,4.4),
(5,5,'DAY',6,6,'PWM','extern_v',0.5,'24V',5,5,5,12.5,12.4,10.5,10.4,2.5,4.5),
(6,6,'NIGHT',7,7,'NIGHT','pv_v',0.6,'48V',6,6,6,12.6,12.5,10.6,10.5,2.6,4.6),
(7,7,'DAY',8,8,'DAY','extern_v',0.7,'Auto',7,7,7,12.7,12.6,10.7,10.6,2.7,4.7),
(8,8,'NIGHT',9,9,'PWM','pv_v',0.5,'12V',8,8,8,12.8,12.7,10.8,10.7,2.8,4.8),
(9,9,'DAY',10,10,'NIGHT','extern_v',0.6,'24V',9,9,9,12.9,12.8,10.9,10.8,2.9,4.9),
(10,10,'NIGHT',11,11,'DAY','pv_v',0.7,'48V',10,10,10,12.6,12.5,10.6,10.5,2.6,4.6),
(11,11,'DAY',12,12,'PWM','extern_v',0.6,'Auto',11,11,11,12.7,12.6,10.7,10.6,2.7,4.7),
(12,12,'NIGHT',13,13,'NIGHT','pv_v',0.6,'12V',12,12,12,12.8,12.7,10.8,10.7,2.8,4.8),
(13,13,'DAY',14,14,'DAY','extern_v',0.7,'12V',13,13,13,12.9,12.8,10.9,10.8,2.9,4.9),
(14,14,'NIGHT',15,15,'NIGHT','pv_v',0.5,'24V',14,14,14,12.6,12.5,10.6,10.5,2.6,4.6),
(15,15,'NIGHT',16,16,'DAY','pv_v',0.6,'48V',15,15,15,12.7,12.6,10.7,10.6,2.7,4.7),
(16,16,'DAY',17,17,'PWM','extern_v',40,'Auto',16,16,16,60,59.9,59.8,59.7,25.5,25.5);


-- adding in pole_id, longitude and latitude to poles database.
alter table poles
add pole_id CHAR(12);

alter table poles
add longitude Decimal(9,6);

alter table poles
alter longitude set default 0.0;

alter table poles
add latitude Decimal(8,6);

alter table poles
alter latitude set default 0.0;
--setting the pole_id to a number so you can set it to primary key
select @i:=0;
update poles set pole_id = @i:=@i+1;

alter table poles
add primary key (pole_id);
--reseting longitude and latitude
update poles set longitude = default;
update poles set latitude = default;
