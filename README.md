# Dört Ev Testi

Türkçe, mobil uyumlu, statik bir kişilik testi. Uygulama ek bağımlılık veya derleme adımı gerektirmez. `index.html` dosyası, `styles.css`, `data.js` ve `app.js` ile birlikte sunulmalıdır.

## İçerik ve puanlama

20 soru ve dört evin açıklamaları `data.js` içindeki `TEST_DATA` nesnesinde tanımlıdır. Her sorunun A, B, C ve D seçenekleri sırasıyla CANDAN, MİNA, RÜYA ve EVA'ya bir puan verir. En çok puan alan ev sonuç olarak gösterilir; eşitlikte test sırasında puan alan evlerden daha önce seçim yapılan kazanır.

## Vercel'de `/test` yolu

Bu klasör tek başına Vercel'e dağıtılırsa kendi projesinin kök adresinde yayınlanır. Mevcut domainin `/test/` adresinde yayınlamak için bu dosyaları domaini sunan mevcut Vercel projesinin statik dosyalarına `/test/` altında ekleyin (ör. `public/test/`) ve yolu o projeden sunun. Yalnızca ayrı bir Vercel projesine domain bağlamak, mevcut domain altında `/test` yolunu otomatik olarak oluşturmaz.
