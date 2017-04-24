// Program sederhana perhitungan polling/vote
// menggunakan pertanyaan tertutup (sudah ditentukan pilihan jawabannya).


var pilihan = {
  alasan: ['Bad ass', 'IMBA', 'Keren', 'Lainnya'],
  gundam: ['Barbatos', 'Dendrobium', 'Exia', 'Nu', 'Zeta', 'Gundam lain'],
};

var hasil = {
  nGundam : [0, 0, 0, 0, 0, 0], //index: 0:Barbatos, 1:Dendrobium, 2:Exia, 3:Nu, 4:Zeta, 5:nvalid
  nAlasan : [0, 0, 0, 0],  //index: 1:Bad ass, 2:IMBA, 3:keren, 4:invalid
};

var n = 0;  //default di 0 alias ga ada/belum ada yg milih


function vote(gundam, alasan) {
  if (gundam === 'Barbatos') {
    hasil.nGundam[0] = hasil.nGundam[0] + 1;
  } else if (gundam === 'Dendrobium') {
    hasil.nGundam[1] = hasil.nGundam[1] + 1;
  } else if (gundam === 'Exia') {
    hasil.nGundam[2] = hasil.nGundam[2] + 1;
  } else if (gundam === 'Nu') {
    hasil.nGundam[3] = hasil.nGundam[3] + 1;
  } else if (gundam === 'Zeta') {
    hasil.nGundam[4] = hasil.nGundam[4] + 1;
  } else {
    hasil.nGundam[5] = hasil.nGundam[5] + 1;
  }
  if (alasan === 'Bad Ass') {
    hasil.nAlasan[0] = hasil.nAlasan[0] + 1;
  } else if (alasan === 'IMBA') {
    hasil.nAlasan[1] = hasil.nAlasan[1] + 1;
  } else if (alasan === 'Keren') {
    hasil.nAlasan[2] = hasil.nAlasan[2] + 1;
  } else {
    hasil.nAlasan[3] = hasil.nAlasan[3] + 1;
  }
  n = n + 1;
}

//----------Hasil Pengumpulan Suara/Vote/Polling

vote('Barbatos', 'Bad Ass');
vote('Zeta', 'Bad Ass');
vote('Nu', 'Bad Ass');
vote('Exia', 'IMBA');
vote('Dendrobium', 'IMBA');
vote('Nu', 'Keren');
vote('Nu', 'Keren');
vote('Zeta', 'Keren');
vote('Dendrobium', 'Bad Ass');
vote('Exia', 'Keren aja');
vote('Exia', 'IMBA');
vote('Zeta', 'Keren');
vote('Barbatos', 'IMBA');
vote('Dendrobium', 'IMBA');
vote('Zeta', 'Bad Ass');
vote('Nu', 'Bad Ass');

//----------------------------------------------


function rekap(hasil) {
  console.log('Perolehan suara untuk masing-masing Gundam adalah sebanyak:');
  for (i = 0; i <= hasil.nGundam.length - 1; i++) {
    var persenG = hasil.nGundam[i] / n * 100;
    console.log('Vote ' + pilihan.gundam[i] + ' ' + hasil.nGundam[i] + ' suara (' + persenG + '%).');
  };
  console.log('Alasan memilih Gundam tersebut adalah karena:');
  for (j = 0; j <= hasil.nAlasan.length - 1; j++) {
    var persenA = hasil.nAlasan[j] / n * 100;
    console.log(pilihan.alasan[j] + ' sebanyak ' + hasil.nAlasan[j] + ' suara (' + persenA + '%).');
  };
}


console.log('Jumlah responden ' + n);
rekap(hasil);
