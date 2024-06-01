const provinces = [
    {
        name: "Anhui",
        capital: "Hefei",
        population: 61 million,
        localSpecialities: ["Huangshan Maofeng Tea", "Wuhu Rice Dumplings"],
        salaryRange: "4000-8000 RMB"
    },
    {
        name: "Beijing",
        capital: "Beijing",
        population: 21.5 million,
        localSpecialities: ["Peking Duck", "Jingjiang Rousi"],
        salaryRange: "8000-20000 RMB"
    },
    {
        name: "Chongqing",
        capital: "Chongqing",
        population: 31 million,
        localSpecialities: ["Chongqing Hot Pot", "Shancheng Pigeon"],
        salaryRange: "5000-12000 RMB"
    },
    {
        name: "Fujian",
        capital: "Fuzhou",
        population: 39 million,
        localSpecialities: ["Buddha Jumps Over the Wall", "Fuzhou Fish Balls"],
        salaryRange: "4000-10000 RMB"
    },
    {
        name: "Gansu",
        capital: "Lanzhou",
        population: 26 million,
        localSpecialities: ["Lanzhou Beef Noodles", "Dunhuang Melons"],
        salaryRange: "3000-7000 RMB"
    },
    {
        name: "Guangdong",
        capital: "Guangzhou",
        population: 113 million,
        localSpecialities: ["Dim Sum", "Cantonese Roast Duck"],
        salaryRange: "6000-15000 RMB"
    },
    {
        name: "Guangxi",
        capital: "Nanning",
        population: 49 million,
        localSpecialities: ["Guilin Rice Noodles", "Nanning Vermicelli Roll"],
        salaryRange: "4000-9000 RMB"
    },
    {
        name: "Guizhou",
        capital: "Guiyang",
        population: 35 million,
        localSpecialities: ["Kaili Sour Soup Fish", "Miao Ethnic Cuisine"],
        salaryRange: "3000-8000 RMB"
    },
    {
        name: "Hainan",
        capital: "Haikou",
        population: 9 million,
        localSpecialities: ["Wenchang Chicken", "Hainanese Chicken Rice"],
        salaryRange: "4000-9000 RMB"
    },
    {
        name: "Hebei",
        capital: "Shijiazhuang",
        population: 75 million,
        localSpecialities: ["Donkey Burger", "Zhangjiakou Lamb"],
        salaryRange: "4000-9000 RMB"
    },
    {
        name: "Heilongjiang",
        capital: "Harbin",
        population: 38 million,
        localSpecialities: ["Harbin Red Sausage", "Wuchang Rice"],
        salaryRange: "3500-8000 RMB"
    },
    {
        name: "Henan",
        capital: "Zhengzhou",
        population: 95 million,
        localSpecialities: ["Luoyang Water Banquet", "Hu La Soup"],
        salaryRange: "4000-9000 RMB"
    },
    {
        name: "Hubei",
        capital: "Wuhan",
        population: 58 million,
        localSpecialities: ["Hot Dry Noodles", "Wuchang Fish"],
        salaryRange: "4000-10000 RMB"
    },
    {
        name: "Hunan",
        capital: "Changsha",
        population: 69 million,
        localSpecialities: ["Stinky Tofu", "Chairman Mao’s Red Braised Pork"],
        salaryRange: "4000-10000 RMB"
    },
    {
        name: "Inner Mongolia",
        capital: "Hohhot",
        population: 25 million,
        localSpecialities: ["Roast Lamb", "Dairy Products"],
        salaryRange: "3500-8000 RMB"
    },
    {
        name: "Jiangsu",
        capital: "Nanjing",
        population: 80 million,
        localSpecialities: ["Salted Duck", "Yangzhou Fried Rice"],
        salaryRange: "5000-12000 RMB"
    },
    {
        name: "Jiangxi",
        capital: "Nanchang",
        population: 46 million,
        localSpecialities: ["Jingdezhen Porcelain", "Lushan Cloud and Mist Tea"],
        salaryRange: "4000-9000 RMB"
    },
    {
        name: "Jilin",
        capital: "Changchun",
        population: 27 million,
        localSpecialities: ["Jilin Ginseng", "Changbai Mountain Mushrooms"],
        salaryRange: "3500-8000 RMB"
    },
    {
        name: "Liaoning",
        capital: "Shenyang",
        population: 43 million,
        localSpecialities: ["Shenyang Chicken Wing", "Benxi Apples"],
        salaryRange: "4000-9000 RMB"
    },
    {
        name: "Ningxia",
        capital: "Yinchuan",
        population: 7 million,
        localSpecialities: ["Goji Berries", "Ningxia Lamb"],
        salaryRange: "3500-8000 RMB"
    },
    {
        name: "Qinghai",
        capital: "Xining",
        population: 6 million,
        localSpecialities: ["Yak Meat", "Qinghai Barley Wine"],
        salaryRange: "3500-8000 RMB"
    },
    {
        name: "Shaanxi",
        capital: "Xi'an",
        population: 39 million,
        localSpecialities: ["Roujiamo", "Biangbiang Noodles"],
        salaryRange: "4000-10000 RMB"
    },
    {
        name: "Shandong",
        capital: "Jinan",
        population: 100 million,
        localSpecialities: ["Jinan Sweet and Sour Carp", "Dezhou Braised Chicken"],
        salaryRange: "4000-10000 RMB"
    },
    {
        name: "Shanghai",
        capital: "Shanghai",
        population: 24 million,
        localSpecialities: ["Xiaolongbao", "Hairy Crab"],
        salaryRange: "8000-20000 RMB"
    },
    {
        name: "Shanxi",
        capital: "Taiyuan",
        population: 37 million,
        localSpecialities: ["Taiyuan Vinegar", "Shanxi Mature Vinegar"],
        salaryRange: "4000-9000 RMB"
    },
    {
        name: "Sichuan",
        capital: "Chengdu",
        population: 83 million,
        localSpecialities: ["Sichuan Hot Pot", "Mapo Tofu"],
        salaryRange: "4000-10000 RMB"
    },
    {
        name: "Tianjin",
        capital: "Tianjin",
        population: 15 million,
        localSpecialities: ["Goubuli Baozi", "Erduoyan Fried Cake"],
        salaryRange: "6000-15000 RMB"
    },
    {
        name: "Tibet",
        capital: "Lhasa",
        population: 3.5 million,
        localSpecialities: ["Yak Butter Tea", "Tibetan Mutton"],
        salaryRange: "3500-8000 RMB"
    },
    {
        name: "Xinjiang",
        capital: "Urumqi",
        population: 25 million,
        localSpecialities: ["Roast Lamb", "Dapanji"],
        salaryRange: "3500-8000 RMB"
    },
    {
        name: "Yunnan",
        capital: "Kunming",
        population: 48 million,
        localSpecialities: ["Crossing the Bridge Noodles", "Yunnan Ham"],
        salaryRange: "4000-9000 RMB"
    },
    {
        name: "Zhejiang",
        capital: "Hangzhou",
        population: 57 million,
        localSpecialities: ["West Lake Fish in Vinegar Gravy", "Longjing Tea"],
        salaryRange: "5000-12000 RMB"
    },
    {
        name: "Guangxi",
        capital: "Nanning",
        population: 49 million,
        localSpecialities: ["Guilin Rice Noodles", "Nanning Vermicelli Roll"],
        salaryRange: "4000-9000 RMB"
    },
    {
        name: "Inner Mongolia",
        capital: "Hohhot",
        population: 25 million,
        localSpecialities: ["Roast Lamb", "Dairy Products"],
        salaryRange: "3500-8000 RMB"
    },
    {
        name: "Ningxia",
        capital: "Yinchuan",
        population: 7 million,
        localSpecialities: ["Goji Berries", "Ningxia Lamb"],
        salaryRange: "3500-8000 RMB"
    },
    {
        name: "Xinjiang",
        capital: "Urumqi",
        population: 25 million,
        localSpecialities: ["Roast Lamb", "Dapanji"],
        salaryRange: "3500-8000 RMB"
    },
    {
        name: "Tibet",
        capital: "Lhasa",
        population: 3.5 million,
        localSpecialities: ["Yak Butter Tea", "Tibetan Mutton"],
        salaryRange: "3500-8000 RMB"
    },
    {
        name: "Hong Kong",
        capital: "Hong Kong",
        population: 7.5 million,
        localSpecialities: ["Dim Sum", "Roast Goose"],
        salaryRange: "15000-30000 HKD"
    },
    {
        name: "Macau",
        capital: "Macau",
        population: 0.7 million,
        localSpecialities: ["Portuguese Egg Tart", "Minchi"],
        salaryRange: "15000-30000 MOP"
    }
];

export default provinces;
