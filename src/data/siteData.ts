export interface PackageItem {
  id: string;
  category: 'edukasi' | 'tiganegara' | 'private';
  badgeText: string;
  badgeClass: string;
  duration: string;
  countries: string;
  title: string;
  image: string;
  imageAlt: string;
  features: string[];
  waContext: string;
}

export interface GalleryItem {
  thumb: string;
  full: string;
  alt: string;
  location: string;
  title: string;
  caption: string;
}

export interface TestimonialItem {
  category: string;
  badgeClass: string;
  cardClass: string;
  textClass: string;
  quote: string;
  initials: string;
  avatarClass: string;
  author: string;
  role: string;
  roleClass: string;
}

export const NUSA_WA_NUMBER = "628558047049";

export const packages: PackageItem[] = [
  {
    id: 'safari-edukasi',
    category: 'edukasi',
    badgeText: '⭐ Favorit Sekolah & Kampus',
    badgeClass: 'bg-nusa-navy/90 text-nusa-gold',
    duration: '4 Hari 3 Malam',
    countries: '🇲🇾 Malaysia • 🇸🇬 Singapura',
    title: 'Paket Safari Edukasi & PKL Internasional',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=700&q=80&fm=webp',
    imageAlt: 'Safari Edukasi Malaysia Singapura',
    features: [
      'Kunjungan Sekolah / Kampus / Industri',
      'Sertifikat & Dokumentasi Spanduk',
      'Hotel *3, Bus AC Eksklusif & Makan Halal',
      'City Tour KLCC, Putrajaya & Merlion Park'
    ],
    waContext: 'Minta Detail Itinerary: Paket Safari Edukasi & PKL 4D3N'
  },
  {
    id: 'eksplorasi-3-negara',
    category: 'tiganegara',
    badgeText: '🔥 Best Seller',
    badgeClass: 'bg-nusa-blue text-white',
    duration: '5 Hari 4 Malam',
    countries: '🇲🇾 Malaysia • 🇸🇬 Singapura • 🇹🇭 Thailand',
    title: 'Paket Eksplorasi Lengkap 3 Negara Asia',
    image: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=700&q=80&fm=webp',
    imageAlt: 'Paket Wisata 3 Negara',
    features: [
      'Kuala Lumpur, Genting, Johor, SG & Hat Yai',
      'Menginap Hotel Bintang 3/4 Strategis',
      'Tiket Cable Car Genting & Wisata Utama',
      'Pendampingan Imigrasi Lintas Negara'
    ],
    waContext: 'Minta Detail Itinerary: Paket 3 Negara 5D4N'
  },
  {
    id: 'corporate-gathering',
    category: 'private',
    badgeText: 'B2B Corporate',
    badgeClass: 'bg-amber-500 text-nusa-dark',
    duration: '3D2N / Custom',
    countries: '🇲🇾 Kuala Lumpur • Genting Highlands',
    title: 'Paket Corporate Gathering & Awarding Night',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=700&q=80&fm=webp',
    imageAlt: 'Corporate Gathering Malaysia Singapura',
    features: [
      'Gala Dinner & Ballroom Hotel Fasilitas Lengkap',
      'Agenda Fun Team Building & Wisata Belanja',
      'Pengurusan Tiket Pesawat PP Rombongan',
      'Dokumentasi Foto & Video Drone Tim'
    ],
    waContext: 'Minta Detail Itinerary: Paket Corporate Gathering'
  },
  {
    id: 'private-family-vip',
    category: 'private',
    badgeText: 'Ramah Anak & Lansia',
    badgeClass: 'bg-emerald-600 text-white',
    duration: 'Fleksibel',
    countries: '🇲🇾 Malaysia • 🇸🇬 Singapura VIP',
    title: 'Private Family Trip (MPV Mewah / Van Pribadi)',
    image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=700&q=80&fm=webp',
    imageAlt: 'Private Trip Keluarga Singapura Malaysia',
    features: [
      'Tanpa Digabung Peserta Lain (100% Private)',
      'Transportasi Alphard / Hiace / Bus Pribadi',
      'Universal Studios SG, Legoland & Kuliner',
      'Ritme Santai Menyesuaikan Keluarga Anda'
    ],
    waContext: 'Minta Detail Itinerary: Private Family Trip VIP'
  }
];

export const galleryItems: GalleryItem[] = [
  {
    thumb: 'https://images.unsplash.com/photo-1508062878650-88b52897f298?auto=format&fit=crop&w=800&q=80&fm=webp',
    full: 'https://images.unsplash.com/photo-1508062878650-88b52897f298?auto=format&fit=crop&w=1200&q=80&fm=webp',
    alt: 'Rombongan di Menara Petronas',
    location: 'Kuala Lumpur, Malaysia',
    title: 'PKL Internasional & Studi Banding – Petronas Twin Towers',
    caption: 'Dokumentasi Rombongan PKL Internasional di Menara Kembar Petronas, Kuala Lumpur'
  },
  {
    thumb: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80&fm=webp',
    full: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80&fm=webp',
    alt: 'Safari Edukasi MTsN 1 Kota Bima',
    location: 'Safari Edukasi 2026',
    title: 'Rombongan MTsN 1 Kota Bima – Kunjungan Pendidikan',
    caption: 'Safari Edukasi Rombongan Siswa & Guru MTsN 1 Kota Bima di Malaysia'
  },
  {
    thumb: 'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=800&q=80&fm=webp',
    full: 'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=1200&q=80&fm=webp',
    alt: 'Masjid Putra Putrajaya',
    location: 'Putrajaya, Malaysia',
    title: 'Wisata Religi & Arsitektur Masjid Putra Putrajaya',
    caption: 'Kunjungan Rombongan ke Masjid Putra, Putrajaya & Dataran Merdeka Malaysia'
  },
  {
    thumb: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80&fm=webp',
    full: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80&fm=webp',
    alt: 'Merlion Park Singapura',
    location: 'Marina Bay, Singapura',
    title: 'City Tour Singapura – Merlion Park & Jewel Changi',
    caption: 'Eksplorasi Merlion Park & Gardens by the Bay Singapura'
  },
  {
    thumb: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=800&q=80&fm=webp',
    full: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=1200&q=80&fm=webp',
    alt: 'Wisata Thailand',
    location: 'Hat Yai, Thailand',
    title: 'Eksplorasi Budaya & Pasar Terapung Thailand Selatan',
    caption: 'Wisata Budaya & Kuliner Halal di Hat Yai & Songkhla, Thailand'
  },
  {
    thumb: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80&fm=webp',
    full: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80&fm=webp',
    alt: 'Armada Bus Pariwisata Nyaman',
    location: 'Fasilitas VIP',
    title: 'Armada Bus Pariwisata Full AC & Tour Leader Berpengalaman',
    caption: 'Armada Bus Pariwisata Eksklusif & Pendampingan Tour Leader NUSA'
  }
];

export const testimonials: TestimonialItem[] = [
  {
    category: 'Safari Edukasi',
    badgeClass: 'bg-sky-500/20 text-sky-300',
    cardClass: 'bg-nusa-dark/80 glass-border',
    textClass: 'text-slate-200',
    quote: '"Bawa rombongan siswa puluhan orang ke luar negeri awalnya bikin was-was. Tapi tim NUSA Tour & Travel benar-benar sigap. Mulai dari urusan imigrasi, bus, sampai jadwal kunjungan edukasi semuanya tertata rapi. Anak-anak sangat antusias dan guru pendamping bisa ikut tenang."',
    initials: 'MT',
    avatarClass: 'bg-nusa-gold text-nusa-dark',
    author: 'Guru Pendamping & Panitia',
    role: 'MTsN 1 Kota Bima',
    roleClass: 'text-nusa-gold'
  },
  {
    category: 'Corporate Trip',
    badgeClass: 'bg-nusa-gold/20 text-nusa-gold',
    cardClass: 'bg-nusa-elevated border border-nusa-gold/40 shadow-xl',
    textClass: 'text-slate-100',
    quote: '"Company gathering tahun ini paling bebas pusing! Tim panitia internal kantor nggak perlu repot ngurusin tiket atau hotel, semuanya sudah di-handle rapi oleh NUSA. Tour leader-nya juga asik banget bawa suasana, bonding antar karyawan dapet banget."',
    initials: 'HR',
    avatarClass: 'bg-sky-400 text-nusa-dark',
    author: 'Koordinator HRD & Panitia',
    role: 'Klien Corporate Gathering 3 Negara',
    roleClass: 'text-sky-300'
  },
  {
    category: 'Private Keluarga',
    badgeClass: 'bg-emerald-500/20 text-emerald-300',
    cardClass: 'bg-nusa-dark/80 glass-border',
    textClass: 'text-slate-200',
    quote: '"Liburan bawa orang tua dan anak kecil ke Malaysia-Singapura jadi sangat nyaman. Itinerary-nya fleksibel, nggak buru-buru, dan restoran halal yang dipilihkan juga cocok banget di lidah. Terima kasih NUSA sudah bikin momen keluarga kami sangat berkesan!"',
    initials: 'KF',
    avatarClass: 'bg-emerald-400 text-nusa-dark',
    author: 'Keluarga Bapak H. Fauzan',
    role: 'Private Trip Malaysia – Singapura',
    roleClass: 'text-emerald-300'
  }
];
