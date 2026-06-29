"""
Mapping informasi penyakit tanaman — Bahasa Indonesia.

Kunci dictionary menggunakan nama kelas PERSIS seperti di labels.txt
(case-sensitive). Perbarui nilai 'description' dan 'treatment' sesuai
kebutuhan agronomis.

Label yang tersedia (dari labels.txt):
0  Leaf smut
1  Bacterial leaf blight
2  brown spot
3  healty
4  Bacterial Leaf Stripe
5  Hama Pelipat Daun
6  insect(hama)
7  blast
8  tomat sehat
9  tomat mosaic viruz
10 Tomato___Tomato_Yellow_Leaf_Curl_Virus
11 Tomato___Target_Spot
12 Tomato___Spider_mites Two-spotted_spider_mite
13 Tomato___Septoria_leaf_spot
"""

DISEASE_INFO: dict[str, dict] = {
    # ── PADI ────────────────────────────────────────────────────────────────
    "Leaf smut": {
        "name": "Gosong Daun Padi (Leaf Smut)",
        "description": (
            "Penyakit yang disebabkan oleh jamur Entyloma oryzae. "
            "Ditandai dengan bercak-bercak kecil berwarna hitam atau coklat tua "
            "berbentuk oval pada permukaan daun, menyerupai jelaga. "
            "Infeksi parah dapat mengurangi kemampuan fotosintesis tanaman."
        ),
        "treatment": [
            "Gunakan varietas padi tahan gosong daun seperti IR64 atau Ciherang.",
            "Aplikasikan fungisida berbahan aktif mankozeb atau iprodion sesuai dosis anjuran.",
            "Lakukan rotasi tanaman untuk memutus siklus hidup patogen.",
            "Hindari pemupukan nitrogen berlebihan yang memicu pertumbuhan vegetatif berlebih.",
            "Jaga kebersihan lahan dengan membersihkan sisa tanaman terinfeksi setelah panen.",
        ],
    },
    "Bacterial leaf blight": {
        "name": "Hawar Daun Bakteri (Bacterial Leaf Blight)",
        "description": (
            "Penyakit bakteri serius yang disebabkan oleh Xanthomonas oryzae pv. oryzae. "
            "Gejala awal berupa bercak basah di tepi daun yang meluas menjadi hawar berwarna "
            "kuning-kelabu dimulai dari ujung dan tepi daun. Pada serangan berat seluruh daun "
            "mengering dan tanaman terlihat seperti terbakar."
        ),
        "treatment": [
            "Gunakan varietas tahan HDB seperti Code, Conde, atau Cilamaya Muncul.",
            "Aplikasikan bakterisida berbahan aktif tembaga oksiklorida atau streptomisin sulfat.",
            "Hindari luka mekanis pada daun selama pemeliharaan.",
            "Kurangi dosis pupuk nitrogen; perbanyak pupuk kalium untuk memperkuat ketahanan.",
            "Perhatikan sanitasi saluran irigasi karena bakteri dapat menyebar melalui air.",
            "Segera buang dan musnahkan tanaman atau bagian tanaman yang terinfeksi berat.",
        ],
    },
    "brown spot": {
        "name": "Bercak Coklat Padi (Brown Spot)",
        "description": (
            "Disebabkan oleh jamur Helminthosporium oryzae (Bipolaris oryzae). "
            "Muncul sebagai bercak oval berwarna coklat dengan tepi kuning di daun, "
            "gluma, dan malai. Penyakit ini sering dikaitkan dengan defisiensi hara "
            "(terutama kalium dan silika) serta kondisi lahan yang tidak subur."
        ),
        "treatment": [
            "Perbaiki kesuburan tanah dengan pemupukan berimbang, utamakan pupuk kalium dan silika.",
            "Gunakan benih sehat; lakukan seed treatment dengan fungisida sebelum semai.",
            "Aplikasikan fungisida berbahan aktif propineb atau difenokonazol saat gejala awal muncul.",
            "Atur jarak tanam agar sirkulasi udara baik dan kelembaban tidak berlebihan.",
            "Lakukan pengapuran pada lahan masam untuk optimasi penyerapan hara.",
        ],
    },
    "healty": {
        "name": "Tanaman Sehat",
        "description": (
            "Tanaman terdeteksi dalam kondisi sehat. Tidak ada tanda-tanda infeksi penyakit "
            "atau serangan hama yang signifikan. Terus lakukan perawatan rutin untuk "
            "mempertahankan kondisi optimal."
        ),
        "treatment": [
            "Lanjutkan pemupukan berimbang sesuai fase pertumbuhan tanaman.",
            "Pantau secara berkala untuk deteksi dini gejala penyakit.",
            "Pertahankan kondisi air dan drainase yang optimal.",
            "Terapkan praktik budidaya GAP (Good Agricultural Practices).",
        ],
    },
    "Bacterial Leaf Stripe": {
        "name": "Hawar Daun Bergaris Bakteri (Bacterial Leaf Stripe)",
        "description": (
            "Disebabkan oleh Xanthomonas oryzae pv. oryzicola. Gejala berupa garis-garis "
            "basah berwarna hijau tua hingga kuning pucat yang memanjang sejajar tulang daun. "
            "Berbeda dengan HDB, penyakit ini menyerang mesofil daun, bukan pembuluh vaskuler."
        ),
        "treatment": [
            "Gunakan varietas dengan ketahanan terhadap penyakit ini.",
            "Aplikasikan bakterisida berbasis tembaga pada awal infeksi.",
            "Kurangi kelembaban dengan mengatur jarak tanam dan drainase.",
            "Hindari penggunaan air irigasi dari sumber yang tercemar.",
            "Buang dan bakar bagian tanaman yang menunjukkan gejala parah.",
        ],
    },
    "Hama Pelipat Daun": {
        "name": "Hama Pelipat Daun (Leaf Folder)",
        "description": (
            "Serangan serangga Cnaphalocrocis medinalis yang melipat dan menjahit tepi daun "
            "menjadi tabung, kemudian memakan jaringan hijau daun dari dalam tabung tersebut. "
            "Daun yang terserang tampak putih memanjang (seperti 'jalur putih') dan akhirnya mengering."
        ),
        "treatment": [
            "Lepaskan musuh alami seperti parasitoid telur Trichogramma spp. atau predator laba-laba.",
            "Gunakan insektisida berbahan aktif klorantraniliprol atau fipronil sesuai ambang ekonomi.",
            "Potong dan hancurkan tabung daun yang dilipat untuk mengurangi populasi larva.",
            "Lakukan penanaman serempak di satu hamparan untuk mengurangi sumber inang.",
            "Gunakan lampu perangkap untuk menangkap imago ngengat.",
        ],
    },
    "insect(hama)": {
        "name": "Serangan Hama Serangga",
        "description": (
            "Terdeteksi adanya kerusakan akibat serangan serangga hama. Tipe hama dan pola "
            "kerusakannya perlu diidentifikasi lebih lanjut secara langsung di lapangan untuk "
            "penanganan yang tepat sasaran."
        ),
        "treatment": [
            "Lakukan identifikasi jenis serangga secara langsung (hama pengisap, penggerek, atau pemakan daun).",
            "Konsultasikan dengan Penyuluh Pertanian Lapangan (PPL) setempat.",
            "Terapkan Pengendalian Hama Terpadu (PHT): utamakan pengendalian biologis sebelum kimiawi.",
            "Gunakan insektisida yang sesuai dengan jenis hama jika kepadatan populasi melampaui ambang ekonomi.",
            "Jaga kebersihan lahan dan singkirkan gulma yang bisa menjadi inang hama.",
        ],
    },
    "blast": {
        "name": "Blas Padi (Rice Blast)",
        "description": (
            "Penyakit paling merusak pada padi, disebabkan oleh jamur Magnaporthe oryzae. "
            "Menyerang daun (bercak berbentuk belah ketupat dengan tepi coklat-merah), leher malai "
            "(neck blast), dan ruas batang. Serangan pada leher malai menyebabkan bulir hampa "
            "atau pengisian gabah tidak sempurna."
        ),
        "treatment": [
            "Gunakan varietas tahan blas yang direkomendasikan untuk wilayah setempat.",
            "Lakukan seed treatment dengan fungisida triazol sebelum semai.",
            "Aplikasikan fungisida berbahan aktif trisiklazol, isoprotiolan, atau azoksistrobin.",
            "Hindari pemupukan nitrogen berlebihan, terutama pada fase anakan aktif.",
            "Atur waktu tanam untuk menghindari fase kritis (bunting-berbunga) bertepatan musim hujan lebat.",
            "Jaga air lahan — irigasi berselang (intermittent irrigation) dapat mengurangi kelembaban mikro.",
        ],
    },
    # ── TOMAT ───────────────────────────────────────────────────────────────
    "tomat sehat": {
        "name": "Tanaman Tomat Sehat",
        "description": (
            "Tanaman tomat terdeteksi dalam kondisi sehat. Tidak ada gejala penyakit "
            "atau serangan hama yang terlihat. Pertahankan kondisi ini dengan perawatan rutin."
        ),
        "treatment": [
            "Lanjutkan pemupukan NPK berimbang sesuai fase pertumbuhan.",
            "Pastikan drainase baik untuk mencegah busuk akar.",
            "Pantau secara rutin terutama bagian bawah daun untuk deteksi dini hama/penyakit.",
            "Lakukan pemangkasan tunas air (wiwil) secara teratur.",
        ],
    },
    "tomat mosaic viruz": {
        "name": "Virus Mosaik Tomat (Tomato Mosaic Virus - ToMV)",
        "description": (
            "Disebabkan oleh Tomato Mosaic Virus (ToMV), ditularkan secara mekanis dan melalui benih "
            "terinfeksi. Gejala berupa pola mosaik (belang-belang hijau tua/muda) pada daun, "
            "daun mengkerut dan menggulung, pertumbuhan terhambat, serta produksi buah menurun drastis."
        ),
        "treatment": [
            "Gunakan benih bersertifikat bebas virus atau lakukan heat treatment pada benih.",
            "Eradikasi tanaman terinfeksi segera setelah terdeteksi untuk mencegah penyebaran.",
            "Cuci tangan dan sterilisasi alat pertanian dengan larutan susu skim 10% setelah kontak tanaman.",
            "Kendalikan serangga vektor seperti kutu daun (Myzus persicae) dengan insektisida selektif.",
            "Tidak ada pestisida yang dapat menyembuhkan tanaman terinfeksi virus — fokus pada pencegahan.",
        ],
    },
    "Tomato___Tomato_Yellow_Leaf_Curl_Virus": {
        "name": "Virus Keriting Daun Kuning Tomat (TYLCV)",
        "description": (
            "Disebabkan oleh Tomato Yellow Leaf Curl Virus (TYLCV), ditularkan oleh kutu kebul "
            "(Bemisia tabaci). Gejala khas: daun-daun muda menggulung ke atas, menguning "
            "(klorosis), pertumbuhan terhambat parah (stunting), dan tanaman hampir tidak berbuah. "
            "Merupakan salah satu penyakit tomat paling merugikan di daerah tropis."
        ),
        "treatment": [
            "Gunakan varietas tomat tahan TYLCV (misal: Fortuna, Servo, atau varietas hibrida tahan).",
            "Kendalikan kutu kebul (Bemisia tabaci) secara intensif menggunakan insektisida sistemik (imidakloprid, tiametoksam).",
            "Pasang mulsa plastik perak untuk mengusir kutu kebul.",
            "Gunakan kelambu/netting anti-serangga pada persemaian.",
            "Eradikasi segera tanaman yang terinfeksi untuk memutus rantai penularan.",
            "Lakukan rotasi tanaman dengan tanaman bukan inang kutu kebul.",
        ],
    },
    "Tomato___Target_Spot": {
        "name": "Bercak Target Tomat (Target Spot)",
        "description": (
            "Disebabkan oleh jamur Corynespora cassiicola. Gejala berupa bercak bulat "
            "berwarna coklat dengan lingkaran-lingkaran konsentris menyerupai sasaran tembak (target), "
            "dikelilingi halo kuning. Menyerang daun, batang, dan buah. Kelembaban tinggi "
            "mempercepat penyebaran."
        ),
        "treatment": [
            "Aplikasikan fungisida berbahan aktif mankozeb, klorotalonil, atau azoksistrobin.",
            "Pangkas daun bagian bawah yang terinfeksi untuk meningkatkan sirkulasi udara.",
            "Hindari penyiraman dari atas (overhead irrigation) — gunakan irigasi tetes.",
            "Atur jarak tanam agar tidak terlalu rapat.",
            "Bersihkan dan musnahkan sisa tanaman terinfeksi setelah musim tanam berakhir.",
        ],
    },
    "Tomato___Spider_mites Two-spotted_spider_mite": {
        "name": "Tungau Laba-laba Berbintik Dua (Two-spotted Spider Mite)",
        "description": (
            "Serangan tungau Tetranychus urticae, hama berukuran sangat kecil yang mengisap "
            "cairan sel daun. Gejala awal: bintik-bintik putih/kuning halus di permukaan atas daun "
            "(stippling). Serangan berat menyebabkan daun menguning, mengering, dan gugur. "
            "Seringkali terdapat jaring halus di bawah permukaan daun."
        ),
        "treatment": [
            "Semprotkan akarisida (abamektin, spiromesifen, atau bifenazat) di bagian bawah daun.",
            "Tingkatkan kelembaban udara — tungau berkembang pesat pada kondisi panas dan kering.",
            "Lepaskan predator alami seperti Phytoseiulus persimilis atau Neoseiulus californicus.",
            "Semprotkan sabun insektisida atau minyak neem sebagai alternatif ramah lingkungan.",
            "Rotasi penggunaan akarisida untuk mencegah resistensi.",
            "Jaga kebersihan lahan dan hindari stres kekeringan pada tanaman.",
        ],
    },
    "Tomato___Septoria_leaf_spot": {
        "name": "Bercak Daun Septoria pada Tomat (Septoria Leaf Spot)",
        "description": (
            "Disebabkan oleh jamur Septoria lycopersici. Gejala khas: bercak bulat kecil "
            "berwarna coklat tua dengan tepi gelap dan bagian tengah yang lebih terang (krem/putih), "
            "sering disertai titik-titik hitam kecil (piknidium) di tengah bercak. "
            "Infeksi dimulai dari daun tua di bagian bawah dan menjalar ke atas."
        ),
        "treatment": [
            "Aplikasikan fungisida berbahan aktif mankozeb, klorotalonil, atau tembaga hidroksida.",
            "Pangkas dan buang daun-daun tua yang terinfeksi di bagian bawah tanaman.",
            "Hindari menyiram dari atas dan basahi tanah, bukan daun.",
            "Pasang mulsa di sekitar tanaman untuk mencegah percikan spora dari tanah.",
            "Terapkan rotasi tanaman — jangan menanam tomat atau solanaceae lain di lahan yang sama selama 2–3 musim.",
            "Gunakan varietas yang memiliki toleransi terhadap Septoria.",
        ],
    },
}


def get_disease_info(class_name: str) -> dict:
    """
    Kembalikan informasi penyakit berdasarkan nama kelas.
    Jika kelas tidak ditemukan di mapping, kembalikan template default.
    """
    return DISEASE_INFO.get(
        class_name,
        {
            "name": class_name,
            "description": (
                f"Informasi detail untuk kelas '{class_name}' belum tersedia. "
                "Silakan konsultasikan dengan ahli pertanian setempat."
            ),
            "treatment": [
                "Konsultasikan dengan Penyuluh Pertanian Lapangan (PPL) setempat.",
                "Kirimkan sampel tanaman ke laboratorium penyakit tumbuhan untuk diagnosa lebih lanjut.",
            ],
        },
    )