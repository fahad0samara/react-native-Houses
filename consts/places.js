const places = [
  {
    id: "1",
    name: "مهرجان جازان الشتوي",
    location: "jazan",
    image:
      "https://i0.wp.com/www.mojaznews.com/wp-content/uploads/2022/01/%D9%85%D9%87%D8%B1%D8%AC%D8%A7%D9%86-%D8%AC%D8%A7%D8%B2%D8%A7%D9%86-%D8%A7%D9%84%D8%B4%D8%AA%D9%88%D9%8A-20222.jpg",
    details: `يعتبر مهرجان جازان الشتوي 2022 من أهم المهرجانات التي تقام سنويًا في منطقة جازان طوال فترة الشتاء، وهو يعتبر من المهرجانات السياحية الذي يهدف إلى تنشيط السياحة في منطقة جازان، كما أن هذا المهرجان يدعو السعوديين؛ حتى يتعرفوا على التراث التاريخي للمنطقة وتريهم الإرث الحضاري التي تمتلكه، وهذا يعد من ضمن الجهود التي تحرص على فعلها المدينة السعودية حتى تقوم بتنشيط السياحة ولتحي تنفيذ أهداف رؤية المملكة 2030 في مجالات السياحة.

    `,
    categories: "Festivals",
    rating: 4.5,
    coordinate: {
      latitude: 16.966178784751108,
      longitude: 42.541492540022624,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
  {
    id: "2",
    name: "العين الحارة الخوبة",
    location: "jazan",
    image: "https://pbs.twimg.com/media/DHhi9SwXUAA6gop.jpg",
    details: `العين الحارة الخوبة تبعد العين مسافة 50 كم من الناحية الشرقية الجنوبية لمدينة جازان. تقع العين في محافظة الحرث، وهي محتلة صخرة بركانية تشاهد من الطريق العام، وخيمة الدخان الأبيض المتصاعد من أبخرتها. ماؤها شديد الحرارة وتنساب من مجرى وادي خلب القريب منها، وبالرغم من اختلاط مائها بماء الوادي فانه لا يستطيع الإنسان أن يغتسل في الوادي أبان فصل الصيف. وقد أقيم عليها مشروع سياحي طبي`,
    categories: "Tourism Places",
    rating: 4.5,
    coordinate: {
      latitude: 17.284266043793153,
      longitude: 43.150769881324315,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
  {
    id: "3",
    name: "مطعم لؤلؤة الساحل ",
    location: "jazan",
    image:
      "https://ktobly-global-cdn.ams3.cdn.digitaloceanspaces.com/uploads/tajrobtak/originals/3aec0a0b-9eb2-4814-89c7-c956946dbebb.jpg",
    details: `يعد مطعم لؤلؤة الساحل أو (لؤلؤة صدفة الساحل)، يعرف أيضا بإسم المالك (مطعم علي جبلي) من أفضل وأقدم مطاعم جازان التي تقدم المأكولات الشعبية التقليدية الخاصة بالسعودية وتحديدا جازان. أيضا يقدمون بعض الوجبات الغربية السريعة والتي دائما ما تكون طازجة ولذيذة.`,
    categories: "Local Resturents",
    rating: 4.5,
    coordinate: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
  {
    id: "4",
    name: "فود ترك ابو محمد للبطاطس الجازاني ",
    location: "jazan",
    image:
      "https://www.newsouq.com.sa/uploads/images/img_1920x_5f26f844a2242.jpg",
    details: `فود ترك ابو محمد للبطاطس الجازاني موقعه بجوار القريه التراثيه `,
    categories: "Fast Foods",
    rating: 4.5,
    coordinate: {
      latitude: 16.825117240607945,
      longitude: 42.620521138987876,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
  {
    id: "5",
    name: "سلا جازان",
    location: "jazan",
    image:
      "https://gumlet.assettype.com/sabq%2Fimport%2Fuploads%2Fmaterial-file%2F61995bf2544a69607f8b459d%2F61995d111961c.jpg",
    details: `منازل مبنية على الطراز الجبلي القديم بالأحجار وبعض مواد البناء البسيطة إلى مزارات سياحية ونزل ريفية`,
    categories: "Houses",
    rating: 4.5,
    coordinate: {
      latitude: 17.03845208348996,
      longitude: 43.14824906784606,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
  {
    id: "6",
    name: "ام علي للاكلات الجيزانيه",
    location: "jazan",
    image:
      "https://vid.alarabiya.net/images/2016/07/06/233e8817-e997-4874-b67e-6de606e6285c/233e8817-e997-4874-b67e-6de606e6285c_16x9_1200x676.jpg?width=801&format=jpg",
    categories: "Local Resturents",
    details: `عززت ربات البيوت في منطقة جازان , الحفاظ على تلك المأكولات الشعبية , من خلال الطهي في "الميفا" أو التنور الفخاري الذي يستخدم للطهي ويصنع بطريقة تقليدية ويباع في الأسواق الشعبية بالمنطقة , حيث يتم في الميفا طهي "الشوربة" الرمضانية في وعاء حجري مجوف يعرف باسم البرمة توضع بداخلها قطع اللحم مع الشوربة , إلى جانب طهي " المغش " وهو وعاء حجري توضع بداخله قطع اللحم مع الخضراوات , وكذلك يتم إعداد العيش أو الخمير الذي يتكون من حبوب الذرة التي يتم طحنها بعناية عبر المطحنة الحجرية التقليدية ومن ثم إعدادها ليتم خبزها ، فضلاً عن خبز الدخن `,

    rating: 4.5,
    coordinate: {
      latitude: 17.03845208348,
      longitude: 43.14824904606,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
  {
    id: "7",
    name: "ام يحيى للاكلات الشعبيه",
    location: "jazan",
    image: "https://pbs.twimg.com/media/El5g-nZW0AIu3kU?format=jpg&name=small",
    categories: "Local Resturents",
    details: `يعتمد كثير من أهالي منطقة جازان على ما يسمى بـ "الميفا" المعروف بـ "التنور" في إعداد المأكولات التقليدية التي اشتهرت بها المنطقة خصوصا خلال شهر رمضان المبارك حيث يحصر الأهالي على تجهيز الميفا فلا يكاد تخلو البيوت الجازانية عادة من وجود الميفا. ويصنع الميفا أو التنور من الفخار بحيث يصمم على شكل وعاء مجوف وبأحجام مختلفة تتوافر في الأسواق الشعبية بالمنطقة ويستفاد منه في طبخ المأكولات الشعبية كحنيد اللحم الجازاني الشير`,

    rating: 4.5,
    coordinate: {
      latitude: 17.038452083489,
      longitude: 43.14824906784606,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
  {
    id: "8",
    name: "  قلعة الدوسرية ",
    location: "jazan",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipOqcVAM931w_pBVn2prodjhBimtfu6FGELvlfiK=s1360-w1360-h1020",
    details: `تقع قلعة الدوسرية في مدينة جازان على قمة جبل يطل على ميناء البحر الأحمر، وهي عبارة عن مبنى حربيّ مربع بُنيَ عام 1225هـ.
تبلغ مساحة القلعة 900م2 تقريباً، وتقع على أعلى قمم المدينة، وتتكون من طابقين، وأربعة أبراج أسطوانية تُضفي نتوءاً على شكلها الخارجي ، وتتخلل جدرانها فتحات لمراقبة المنطقة وحمايتها، ، وكانت القلعة في فترة من الفترات مركزاً تعليميّاً، وقد تم تجديدها في عهد جلالة الملك عبد العزيز -طيّب الله ثراه- لتصبح مقراًّ للجيش السعودي، واليوم تعمل الهيئة العامة للسياحة والتراث الوطني على ترميمها لتكون موقعاً تراثيّاً فريداً.
`,
    categories: "Tourism Places",
    rating: 4.5,
    coordinate: {
      latitude: 16.8885879711265,
      longitude: 42.5533935922395,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
  {
    id: "9",
    name: "  وادي الروغ",
    location: "jazan",
    image: "https://garbnews.net/contents/newsm/181342_2.jpeg",
    details: `وادي الروغ: يقع أطول شلالات منطقة جازان بطول يتجاوز مئات الأمتار في جبل سلا بمحافظة العارضة .
ويعد وادي الروغ في محافظة العارضة واحدًا من أجمل الأودية ويعد أطول الشلالات في المنطقة وتحديدًا في جبل سلا .
`,

    categories: "Tourism Places",
    rating: 4.5,
    coordinate: {
      latitude: 17.03135551252786,
      longitude: 43.1448067908318,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
  {
    id: "9",
    name: "قرية ومزرعة وشيل الريفية",
    location: "jazan",
    image: "https://pbs.twimg.com/media/E1iY2bgXMAUbzFh.jpg",
    details: `قرية ومزرعة وشيل الريفية، تعتبر أول مشروع ريفي ينفذ على أرض الواقع في محافظة الداير، ويهدف إلى تهيئة الأجواء الريفية للزائر، من حيث السكن والمبيت والاستمتاع بأجواء المزرعة الريفية بشكل عام".`,
    categories: "Tourism Places",
    rating: 4.5,
    coordinate: {
      latitude: 17.310459628921397,
      longitude: 43.152280553974066,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
  
];

export default places;
