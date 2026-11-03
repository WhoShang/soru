# Dört Ev Testi

Türkçe, mobil uyumlu bir kişilik testi arayüzü. Uygulama ek bağımlılık gerektirmez; `index.html` dosyasını bir tarayıcıda açarak çalıştırabilirsiniz.

## İçeriği ekleme

Test soruları ve ev açıklamaları `data.js` içindeki `TEST_DATA` nesnesinden beslenir. Testin başlaması için dört ev ve tam 20 soru tanımlanmalıdır. Her soru en az iki seçenek içermeli; her seçenek, `houseId` alanıyla dört evden birine puan vermelidir.

```js
window.TEST_DATA = {
  houses: [
    { id: "ev-1", name: "Ev adı", description: "Sonuç açıklaması" },
    { id: "ev-2", name: "Ev adı", description: "Sonuç açıklaması" },
    { id: "ev-3", name: "Ev adı", description: "Sonuç açıklaması" },
    { id: "ev-4", name: "Ev adı", description: "Sonuç açıklaması" }
  ],
  questions: [
    {
      prompt: "Soru metni",
      options: [
        { text: "Seçenek metni", houseId: "ev-1" },
        { text: "Başka bir seçenek", houseId: "ev-2" }
      ]
    }
    // Toplam 20 soru olacak şekilde devam edin.
  ]
};
```

Sonuç, kullanıcının seçimleriyle en çok puan alan evdir. Eşitlik durumunda test boyunca daha erken soruda puan alınan ev seçilir.
