
create table data_set(
    Load1_time1_Set int defualt 0,
    Load1_time2_Set int defualt 0,
    Load1_OutMode varchar(30) defualt 'NIGHT',
    Load2_time1_Set int defualt 0,
    Load2_time2_Set int defualt 0,
    Load2_OutMode varchar(30) defualt 'NIGHT',
    Scale_Mode varchar(30) defualt 'pv_v',
    Param_Setup_Voltage dec(10,5) defualt 7.0,
    Work_V_Setup varchar(30) defualt 'Auto',
    Menu_Password_1 int defualt 0,
    Menu_Password_2 int defualt 0,
    Menu_Password_3 int defualt 0,
    Max_Bat_Limit dec(10,5) defualt 29.0,
    Over_V_Comeback dec(10,5) defualt 27.5,
    Low_V_Comeback dec(10,5) defualt 23.5,
    Low_V_Limit dec(10,5) defualt 21.0,
    MPPT_Close_V dec(10,5) defualt 5.0,
    MPPT_Start_V dec(10,5) defualt 6.0
);