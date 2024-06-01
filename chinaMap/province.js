const provinces = [
    // Provinces
    {
        name: "Anhui",
        capital: "Hefei",
        population: 61000000,
        localSpecialities: ["Huangshan Maofeng Tea", "Wuhu Rice Dumplings"],
        salaryRange: "4000-8000 RMB"
    },
    {
        name: "Fujian",
        capital: "Fuzhou",
        population: 39000000,
        localSpecialities: ["Buddha Jumps Over the Wall", "Fuzhou Fish Balls"],
        salaryRange: "4000-10000 RMB"
    },
    {
        name: "Gansu",
        capital: "Lanzhou",
        population: 26000000,
        localSpecialities: ["Lanzhou Beef Noodles", "Dunhuang Melons"],
        salaryRange: "3000-7000 RMB"
    },
    {
        name: "Guangdong",
        capital: "Guangzhou",
        population: 113000000,
        localSpecialities: ["Dim Sum", "Cantonese Roast Duck"],
        salaryRange: "6000-15000 RMB"
    },
    {
        name: "Guizhou",
        capital: "Guiyang",
        population: 35000000,
        localSpecialities: ["Kaili Sour Soup Fish", "Miao Ethnic Cuisine"],
        salaryRange: "3000-8000 RMB"
    },
    {
        name: "Hainan",
        capital: "Haikou",
        population: 9000000,
        localSpecialities: ["Wenchang Chicken", "Hainanese Chicken Rice"],
        salaryRange: "4000-9000 RMB"
    },
    {
        name: "Hebei",
        capital: "Shijiazhuang",
        population: 75000000,
        localSpecialities: ["Donkey Burger", "Zhangjiakou Lamb"],
        salaryRange: "4000-9000 RMB"
    },
    {
        name: "Heilongjiang",
        capital: "Harbin",
        population: 38000000,
        localSpecialities: ["Harbin Red Sausage", "Wuchang Rice"],
        salaryRange: "3500-8000 RMB"
    },
    {
        name: "Henan",
        capital: "Zhengzhou",
        population: 95000000,
        localSpecialities: ["Luoyang Water Banquet", "Hu La Soup"],
        salaryRange: "4000-9000 RMB"
    },
    {
        name: "Hubei",
        capital: "Wuhan",
        population: 58000000,
        localSpecialities: ["Hot Dry Noodles", "Wuchang Fish"],
        salaryRange: "4000-10000 RMB"
    },
    {
        name: "Hunan",
        capital: "Changsha",
        population: 69000000,
        localSpecialities: ["Stinky Tofu", "Chairman Mao’s Red Braised Pork"],
        salaryRange: "4000-10000 RMB"
    },
    {
        name: "Jiangsu",
        capital: "Nanjing",
        population: 80000000,
        localSpecialities: ["Salted Duck", "Yangzhou Fried Rice"],
        salaryRange: "5000-12000 RMB"
    },
    {
        name: "Jiangxi",
        capital: "Nanchang",
        population: 46000000,
        localSpecialities: ["Jingdezhen Porcelain", "Lushan Cloud and Mist Tea"],
        salaryRange: "4000-9000 RMB"
    },
    {
        name: "Jilin",
        capital: "Changchun",
        population: 27000000,
        localSpecialities: ["Jilin Ginseng", "Changbai Mountain Mushrooms"],
        salaryRange: "3500-8000 RMB"
    },
    {
        name: "Liaoning",
        capital: "Shenyang",
        population: 43000000,
        localSpecialities: ["Shenyang Chicken Wing", "Benxi Apples"],
        salaryRange: "4000-9000 RMB"
    },
    {
        name: "Qinghai",
        capital: "Xining",
        population: 6000000,
        localSpecialities: ["Yak Meat", "Qinghai Barley Wine"],
        salaryRange: "3500-8000 RMB"
    },
    {
        name: "Shaanxi",
        capital: "Xi'an",
        population: 39000000,
        localSpecialities: ["Roujiamo", "Biangbiang Noodles"],
        salaryRange: "4000-10000 RMB"
    },
    {
        name: "Shandong",
        capital: "Jinan",
        population: 100000000,
        localSpecialities: ["Jinan Sweet and Sour Carp", "Dezhou Braised Chicken"],
        salaryRange: "4000-10000 RMB"
    },
    {
        name: "Shanxi",
        capital: "Taiyuan",
        population: 37000000,
        localSpecialities: ["Taiyuan Vinegar", "Shanxi Mature Vinegar"],
        salaryRange: "4000-9000 RMB"
    },
    {
        name: "Sichuan",
        capital: "Chengdu",
        population: 83000000,
        localSpecialities: ["Sichuan Hot Pot", "Mapo Tofu"],
        salaryRange: "4000-10000 RMB"
    },
    {
        name: "Yunnan",
        capital: "Kunming",
        population: 48000000,
        localSpecialities: ["Crossing the Bridge Noodles", "Yunnan Ham"],
        salaryRange: "4000-9000 RMB"
    },
    {
        name: "Zhejiang",
        capital: "Hangzhou",
        population: 57000000,
        localSpecialities: ["West Lake Fish in Vinegar Gravy", "Longjing Tea"],
        salaryRange: "5000-12000 RMB"
    },
    {
        name: "Taiwan",
        capital: "Taipei",
        population: 23500000,
        localSpecialities: ["Bubble Tea", "Beef Noodle Soup"],
        salaryRange: "30000-60000 TWD"
    },
    // Autonomous Regions
    {
        name: "Guangxi",
        capital: "Nanning",
        population: 49000000,
        localSpecialities: ["Guilin Rice Noodles", "Nanning Vermicelli Roll"],
        salaryRange: "4000-9000 RMB"
    },
    {
        name: "Inner Mongolia",
        capital: "Hohhot",
        population: 25000000,
        localSpecialities: ["Roast Lamb", "Dairy Products"],
        salaryRange: "3500-8000 RMB"
    },
    {
        name: "Ningxia",
        capital: "Yinchuan",
        population: 7000000,
        localSpecialities: ["Goji Berries", "Ningxia Lamb"],
        salaryRange: "3500-8000 RMB"
    },
    {
        name: "Tibet",
        capital: "Lhasa",
        population: 3500000,
        localSpecialities: ["Yak Butter Tea", "Tibetan Mutton"],
        salaryRange: "3500-8000 RMB"
    },
    {
        name: "Xinjiang",
        capital: "Urumqi",
        population: 25000000,
        localSpecialities: ["Roast Lamb", "Dapanji"],
        salaryRange: "3500-8000 RMB"
    },
    // Municipalities
    {
        name: "Beijing",
        capital: "Beijing",
        population: 21500000,
        localSpecialities: ["Peking Duck", "Jingjiang Rousi"],
        salaryRange: "8000-20000 RMB"
    },
    {
        name: "Chongqing",
        capital: "Chongqing",
        population: 31000000,
        localSpecialities: ["Chongqing Hot Pot", "Shancheng Pigeon"],
        salaryRange: "5000-12000 RMB"
    },
    {
        name: "Shanghai",
        capital: "Shanghai",
        population: 24000000,
        localSpecialities: ["Xiaolongbao", "Hairy Crab"],
        salaryRange: "8000-20000 RMB"
    },
    {
        name: "Tianjin",
        capital: "Tianjin",
        population: 15000000,
        localSpecialities: ["Goubuli Baozi", "Erduoyan Fried Cake"],
        salaryRange: "6000-15000 RMB"
    },
    // Special Administrative Regions
    {
        name: "Hong Kong",
        capital: "Hong Kong",
        population: 7500000,
        localSpecialities: ["Dim Sum", "Roast Goose"],
        salaryRange: "15000-30000 HKD"
    },
    {
        name: "Macau",
        capital: "Macau",
        population: 700000,
        localSpecialities: ["Portuguese Egg Tart", "Minchi"],
        salaryRange: "15000-30000 MOP"
    }
];

export default provinces;
