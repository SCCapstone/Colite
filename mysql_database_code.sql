
create table data_set(
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