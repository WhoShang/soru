window.TEST_DATA = {
  houses: [
    {
      id: "candan",
      name: "CANDAN",
      description: "Eviniz kesinlikle steril bir sergi alanı değil; içinde aktif olarak yaşanan, çalışkan ve dinamik bir ruhu var! Hem pratik çalışmaya uygun hem de geleneksel çay/kahve keyiflerine düşkün bir yapınız var. Etnik detaylar, esnek konaklama çözümleri ve misafirperverliğiniz evinizin temel karakteri. Tam bir genç profesyonel ya da keyfine düşkün bir öğrenci evinin sıcaklığına sahipsiniz."
    },
    {
      id: "mina",
      name: "MİNA",
      description: "Eviniz aydınlık, modern ve ferah! İskandinav tarzının o yalın ve işlevsel çizgisini seviyorsunuz. Eşya kalabalığından, göz yoran detaylardan hoşlanmıyorsunuz. Ancak beyazın ve sadeliğin soğukluğunu, doğru seçilmiş kadife dokular ve devetabanı gibi bitkilerle kırarak evinizi son derece “yaşayan ve sıcak” bir yuvaya dönüştürmeyi çok iyi biliyorsunuz."
    },
    {
      id: "ruya",
      name: "RÜYA",
      description: "Siz tam olarak entelektüel, üretken ve esprili bir karaktersiniz! Eviniz bir katalog çekiminden fırlamış gibi değil; içinde okunan, oyunlar oynanan, boyalar yapılan gerçek bir yuva. Büyük sofralarınız, manevi köşeleriniz ve banyodaki mizahi dokunuşlarınızla hayata hem derinlikli bakıyor hem de onu çok ciddiye almamayı başarıyorsunuz."
    },
    {
      id: "eva",
      name: "EVA",
      description: "Sizin için evin anlamı “işlevsellik ve samimiyet”. Gösterişten, estetik kaygılardan çok uzak; mütevazı, temiz ve pratik bir yaşam tarzını benimsiyorsunuz. Karşılıklı dizili koltuklarınız ve geleneksel dantel, motifli halı detaylarınız kalabalık misafir gruplarını ağırlamaktan ne kadar keyif aldığınızı gösteriyor. Sizin evinizde herkes kendini yabancılık çekmeden, hemen rahat hisseder."
    }
  ],
  questions: [
    {
      prompt: "Boş zamanlarınızda evde ne yapmaktan hoşlanırsınız?",
      options: [
        { text: "Çayımı/kahvemi demleyip, etnik desenli halımın üzerinde keyif köşemde dinlenmek.", houseId: "candan" },
        { text: "Evi toparlayıp sade ve ferah ortamın, bitkilerimin tadını çıkarmak.", houseId: "mina" },
        { text: "Boya yapmak, kutu oyunları oynamak veya kütüphanemden bir kitap okumak.", houseId: "ruya" },
        { text: "Günlük ev işlerimi halledip misafirlerim için hazırlık yapmak.", houseId: "eva" }
      ]
    },
    {
      prompt: "Arkadaşlarınız size geldiğinde onları nasıl bir düzende ağırlarsınız?",
      options: [
        { text: "Çekyatı açar, katlanır sandalyeleri çıkarır, esnek ve samimi bir ortam kurarım.", houseId: "candan" },
        { text: "Beyaz masamda, gereksiz kalabalıktan uzak konforlu bir atmosferde ağırlarım.", houseId: "mina" },
        { text: "Geniş yemek masasında, uzun sohbetler eşliğinde kalabalık sofralar kurarım.", houseId: "ruya" },
        { text: "Karşılıklı dizilmiş koltuklarımda, kalabalık ve geleneksel bir çay saatiyle ağırlarım.", houseId: "eva" }
      ]
    },
    {
      prompt: "Ev dekorasyonunda sizin için en öncelikli olan şey nedir?",
      options: [
        { text: "Kişisel keyif alanları, kültürel bağlar ve pratiklik.", houseId: "candan" },
        { text: "İskandinav tarzı, aydınlık bir ortam ve sadelik.", houseId: "mina" },
        { text: "Evin yaşanmışlığı, entelektüel derinliği ve manevi bir ruhu olması.", houseId: "ruya" },
        { text: "Estetik gösterişten ziyade günlük yaşamın işlevselliği ve mütevazılık.", houseId: "eva" }
      ]
    },
    {
      prompt: "Mutfağınızda mutlaka olması gereken ve en çok kullandığınız detay nedir?",
      options: [
        { text: "Çeşitli kahve makineleri ve özel bir içecek hazırlama köşesi.", houseId: "candan" },
        { text: "Beyaz dolaplar ve düzenli tutulan pratik bir ahşap tezgah.", houseId: "mina" },
        { text: "Büyük yemeklere ve paylaşımlara olanak tanıyan sıcak bir hazırlık alanı.", houseId: "ruya" },
        { text: "Günlük hayatta işimi hızlıca çözmemi sağlayan pratik bir kettle.", houseId: "eva" }
      ]
    },
    {
      prompt: "Evinizde hakim olmasını istediğiniz genel atmosfer nasıldır?",
      options: [
        { text: "Geleneksel, enerjik, çok amaçlı ve genç bir ruh.", houseId: "candan" },
        { text: "Aydınlık, modern, minimalist ve rahatlatıcı.", houseId: "mina" },
        { text: "Sanatsal, mizahi, sıcak ve dingin.", houseId: "ruya" },
        { text: "Geleneksel ile modernin harmanlandığı, sıradan ve gösterişsiz.", houseId: "eva" }
      ]
    },
    {
      prompt: "Aşağıdaki aksesuarlardan hangisi evinizde görmekten en çok hoşlanacağınız parçadır?",
      options: [
        { text: "Duvarda “Turkish Cay” posteri veya nostaljik bir kahve kutusu.", houseId: "candan" },
        { text: "Doğal ve samimi bir hava katan yuvarlak, saçaklı örme halı.", houseId: "mina" },
        { text: "Banyoda burnunu kapatan figürler veya koyun tasarımlı tuvalet kağıtlığı.", houseId: "ruya" },
        { text: "Yemek masasının üzerini süsleyen şık bir dantel örtü.", houseId: "eva" }
      ]
    },
    {
      prompt: "Evinizin aydınlatmasını seçerken neye dikkat edersiniz?",
      options: [
        { text: "Farklı alanlarda çalışmaya olanak tanıyan bölgesel ışıklandırmalara.", houseId: "candan" },
        { text: "Doğal ışıktan maksimum faydalanmaya ve yalın tasarımlı lambalara.", houseId: "mina" },
        { text: "Endüstriyel kafes sarkıtlar, şamdan avize ve lambaderlerle loş, sıcak bir ortam yaratmaya.", houseId: "ruya" },
        { text: "Gösterişten tamamen uzak, sade ve amaca yönelik aydınlatmalara.", houseId: "eva" }
      ]
    },
    {
      prompt: "Evdeki bitki tercihiniz nasıldır?",
      options: [
        { text: "Alanı daraltmayacak küçük sukulent dokunuşları.", houseId: "candan" },
        { text: "Mekana canlılık katacak büyük yapraklı devetabanı (Monstera).", houseId: "mina" },
        { text: "Üretken ve huzurlu atmosfere eşlik edecek yeşil bitkiler.", houseId: "ruya" },
        { text: "Sadece kolay bakılabilen, mütevazı salon bitkileri.", houseId: "eva" }
      ]
    },
    {
      prompt: "Banyonuzun tarzı aşağıdakilerden hangisine daha yakındır?",
      options: [
        { text: "Mozaik kaplamalar ve sepetli depolama çözümleriyle düzenli.", houseId: "candan" },
        { text: "Bembeyaz, ferah ve tamamen hijyenik/sade bir görünüm.", houseId: "mina" },
        { text: "Esprili ve hayata mizah katan detaylarla dolu.", houseId: "ruya" },
        { text: "Son derece standart ve günlük ihtiyacı karşılayan sade bir alan.", houseId: "eva" }
      ]
    },
    {
      prompt: "Evde bir çalışma veya hobi alanını nasıl kurgularsınız?",
      options: [
        { text: "Gündüz yatağı/çekyat ve birden fazla çalışma sandalyesiyle esnek bir alan yaratarak.", houseId: "candan" },
        { text: "Modern hatlara sahip mobilyalarla göz yormayan, minimalist bir şekilde.", houseId: "mina" },
        { text: "Kitaplık, boya setleri ve fırçalarla iç içe, sanat dolu bir masa olarak.", houseId: "ruya" },
        { text: "İhtiyaç duyduğumda açıp kapatabileceğim pratik bir katlanır sehpa kullanarak.", houseId: "eva" }
      ]
    },
    {
      prompt: "Evdeki halı seçiminiz hangisi olurdu?",
      options: [
        { text: "Mutfakta ve salonda etnik desenli halılar.", houseId: "candan" },
        { text: "Mavi-gri tonlarında soyut desenli modern bir halı.", houseId: "mina" },
        { text: "Koyu renkli kadife koltuklara uyum sağlayacak kaliteli, tok dokulu halılar.", houseId: "ruya" },
        { text: "Geleneksel motifli, klasik tarzda sıcak bir halı.", houseId: "eva" }
      ]
    },
    {
      prompt: "Oturma düzeniniz ve koltuk seçiminiz nasıl şekillenir?",
      options: [
        { text: "Alanı daraltmayan, gerektiğinde yatağa dönüşebilen kullanışlı modeller.", houseId: "candan" },
        { text: "Koyu füme/lacivert kadife dokulu, beyaz duvarlarla kontrast yaratan modern koltuklar.", houseId: "mina" },
        { text: "Çoklu oturma düzenine sahip, kalabalığı kaldırabilen geniş antrasit/lacivert koltuklar.", houseId: "ruya" },
        { text: "Karşılıklı üçlü ve ikili dizilime sahip, misafir ağırlamaya yönelik eklektik takımlar.", houseId: "eva" }
      ]
    },
    {
      prompt: "Evdeki depolama ve düzen anlayışınız nasıldır?",
      options: [
        { text: "Sepetler ve raflarla her şeyin el altında ama derli toplu olduğu aktif bir düzen.", houseId: "candan" },
        { text: "Gereksiz hiçbir eşyanın barınmadığı, beyaz alanların ve ferahlığın ön planda olduğu bir düzen.", houseId: "mina" },
        { text: "Yaşanmışlığın getirdiği hafif bir kalabalığın, kitapların ve oyunların olduğu sıcak bir düzen.", houseId: "ruya" },
        { text: "Tamamen işlevsel, estetik kaygıdan ziyade pratik ihtiyaca yönelik bir düzen.", houseId: "eva" }
      ]
    },
    {
      prompt: "Evin manevi ve ruhani tarafını nasıl yansıtırsınız?",
      options: [
        { text: "Geleneksel misafirperverlik ve çay/kahve ritüelleriyle.", houseId: "candan" },
        { text: "Huzur ve sakinlik veren, karmaşadan uzak bir tasarım felsefesiyle.", houseId: "mina" },
        { text: "Kitaplığın yanına serilmiş seccadeler ve ev içindeki dingin köşelerle.", houseId: "ruya" },
        { text: "Sadelik, mütevazılık ve şatafattan uzak duran yaşam felsefesiyle.", houseId: "eva" }
      ]
    },
    {
      prompt: "Evinizi bir cümle ile özetleyecek olsanız hangisi olurdu?",
      options: [
        { text: "“Çalışkan, dinamik ve keyfine düşkün bir yuva.”", houseId: "candan" },
        { text: "“Ferah, pratik ve kalabalıklardan arınmış modern bir sığınak.”", houseId: "mina" },
        { text: "“Okuyan, çizen, dua eden ve gülümseyen karakterli bir mekan.”", houseId: "ruya" },
        { text: "“İşlevsel, mütevazı ve herkese kapısı açık geleneksel bir ev.”", houseId: "eva" }
      ]
    },
    {
      prompt: "Evdeki eşyaların sizin için anlamı nedir?",
      options: [
        { text: "İşimi görmeli ama aynı zamanda kültürel damak tadımı (kahve gibi) yansıtmalı.", houseId: "candan" },
        { text: "Sayıca az olmalı ama hem görsel olarak şık hem de konforlu olmalı.", houseId: "mina" },
        { text: "Bir anısı olmalı, beni üretmeye veya düşünmeye teşvik etmeli.", houseId: "ruya" },
        { text: "Pratik olmalı; gösterişli olmasına hiç gerek yok, işimi görsün yeter.", houseId: "eva" }
      ]
    },
    {
      prompt: "Duvarlarınızda veya raflarınızda en çok neye rastlanır?",
      options: [
        { text: "Doğal ev sıcaklığı veren metro seramikler ve yerel posterler.", houseId: "candan" },
        { text: "Açık renk, dokusuz boş alanlar ve belki bir iki sade tablo.", houseId: "mina" },
        { text: "Geniş bir kitap koleksiyonu ve kutu oyunları.", houseId: "ruya" },
        { text: "Minimalist, gösterişsiz ve sade süslemeler.", houseId: "eva" }
      ]
    },
    {
      prompt: "Bir akşam rutininiz genellikle nasıl geçer?",
      options: [
        { text: "Bilgisayar başında biraz çalışıp ardından kahve makinesinden bir kahve alarak.", houseId: "candan" },
        { text: "Sade salonumda kadife koltuğuma uzanıp günün yorgunluğunu atarak.", houseId: "mina" },
        { text: "Birlikte ibadet edip veya sohbet edip ardından zihinsel aktivitelere vakit ayırarak.", houseId: "ruya" },
        { text: "Çamaşır kurutmalığını toplayıp, evi ertesi güne hazırlayarak.", houseId: "eva" }
      ]
    },
    {
      prompt: "Aşağıdaki “beklenmedik” veya “pratik” detaylardan hangisi sizin evinizde sırıtmaz?",
      options: [
        { text: "Ekstra katlanır sandalyeler.", houseId: "candan" },
        { text: "Mutfak tezgahındaki minimal tasarımlı ev aletleri.", houseId: "mina" },
        { text: "Burnunu kapatan esprili tel figürler.", houseId: "ruya" },
        { text: "Salonun bir köşesinde duran çamaşır kurutmalığı.", houseId: "eva" }
      ]
    },
    {
      prompt: "Eve giren bir yabancı ilk olarak ne hisseder?",
      options: [
        { text: "Burada sürekli bir şeyler üreten, genç ve dinamik biri yaşıyor.", houseId: "candan" },
        { text: "Burada düzene, hijyene ve modern tasarıma önem veren biri yaşıyor.", houseId: "mina" },
        { text: "Burada derinliği olan, hayatla dalga geçebilen sanatsal bir ruh yaşıyor.", houseId: "ruya" },
        { text: "Burada gösterişi sevmeyen, samimi ve misafirperver biri yaşıyor.", houseId: "eva" }
      ]
    }
  ]
};
