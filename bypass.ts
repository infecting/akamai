function sensor_data(): string {
    var formData = getFormData()
    return ""
}

bmak.fpcf = {};
    bmak.fpcf.fpValstr = bmak.valStr();
    bmak.wv = "Apple";
    bmak.wr = "Apple M1";
    bmak.wl = 31;
    bmak.getmr()
    var devicePixelRatio = 2;
    var date = bmak.get_cf_date();
    var difference = bmak.diff_dates();
    var cookie_exists = 2;
    var beginning = bmak.gd();
    var form_info = "0,-1,0,0,1498,-1,0;0,-1,0,1,2588,1468,0;0,-1,0,1,-1,1500,0;0,-1,0,1,-1,1684,0;0,-1,0,1,-1,1684,0;0,-1,0,1,-1,1684,0;0,-1,0,1,2563,-1,0;";
    var home_url = "https://www.fedex.com/global/choose-location.html";
    var aj_type = 1;
    var total_calls = 0;
    var obfuscated_start_time = bmak.jrs(bmak.start_ts);
    var f = (((bmak.start_ts / (2016 * 2016)) /23) / 6)
    var browser_fingerprint = bmak.fas();
    console.log(obfuscated_start_time)
    var cookie_array = [bmak.ke_vel + 1, bmak.me_vel + 32, bmak.te_vel + 32, bmak.doe_vel, bmak.dme_vel, bmak.pe_vel, total_calls, bmak.diff_dates(), bmak.init_time, bmak.start_ts, bmak.getRandomInt(10, 30),parseInt(bmak.z1 / 23), bmak.ke_cnt, bmak.me_cnt, f, bmak.pe_cnt, bmak.te_cnt, bmak.diff_dates(), 4989478 /* bmak.ta bmak.b() function */, "0", cookie_exists, bmak.ab(cookie_exists), Math.floor(Math.random() * 1e3).toString(), "-1604630381", browser_fingerprint, "PiZtE", obfuscated_start_time[0], obfuscated_start_time[1], 0, -1];
    var cookie_joined = cookie_array.join();
    var obfuscated_fpcf = bmak.ab(bmak.fpcf.fpValstr) + "";
    wgl_info = bmak.fmh + "," + 2 + "," + bmak.ssh + "," + bmak.wv + "," + bmak.wr + "," + bmak.weh + "," + bmak.wl;

    //sensor_data
    bmak.sensor_data = 
    bmak.ver.toString() + 
    "-1,2,-94,-100," + 
    beginning + 
    "-1,2,-94,-101," + 
    "do_en,dm_en,t_en" + 
    "-1,2,-94,-105," + 
    form_info + 
    "-1,2,-94,-102," + 
    form_info + 
    "-1,2,-94,-108," + 
    "-1,2,-94,-110," + 
    bmak.sensor_totaler() /* mact */ + 
    "-1,2,-94,-117," + 
    "-1,2,-94,-111," + 
    "-1,2,-94,-109," + 
    "-1,2,-94,-114," + 
    "-1,2,-94,-103," + 
    "0,1,70,857,382;" /* vcact */ + 
    "-1,2,-94,-112," + 
    home_url + 
    "-1,2,-94,-115," + 
    cookie_joined + 
    "-1,2,-94,-106," + 
    "1" + 
    "-1,2,-94,-119," + 
    "-1,2,-94,-119," + 
    bmak.mr + 
    "-1,2,-94,-122," + 
    "0,0,0,0,1,0,0" + 
    "-1,2,-94,-123," + 
    "-1,2,-94,-124," + 
    "-1,2,-94,-126," + 
    "-1,2,-94,-127," + 
    "10321144241322243122";

    P = bmak.ab(bmak.sensor_data) ^ 24;
    bmak.sensor_data = 
    bmak.sensor_data +
    "-1,2,-94,-70," +
    bmak.fpcf.fpValstr +
    "-1,2,-94,-80," +
    obfuscated_fpcf +
    "-1,2,-94,-116," + 
    bmak.o9 + 
    "-1,2,-94,-118," +
    wgl_info;

    var F = bmak.od(bmak.cs, bmak.api_public_key).slice(0, 16)
    var D = Math.floor(bmak.get_cf_date() / 36e5);
    var R = bmak.get_cf_date();
    var N = F + bmak.od(D, F) + bmak.sensor_data;
    bmak.sensor_data = N + ";" + (bmak.get_cf_date() - date) + ";" + 3 + ";" + (bmak.get_cf_date() - R);
    bmak.od

    return bmak.sensor_data