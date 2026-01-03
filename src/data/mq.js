// Data yang diambil dari Seeder PHP sebelumnya
export const mqData = [
    { id: 1, chapter: 'Chapter 1', nama_item: 'Colon Leaf (Daun Colon)', jumlah: 'x5' },
    { id: 2, chapter: 'Chapter 1', nama_item: 'Hard Dragon Skin (Sisik Naga)', jumlah: 'x2' },
    { id: 3, chapter: 'Chapter 1', nama_item: 'Lamb Meat (Daging Domba)', jumlah: 'x1' },
    { id: 4, chapter: 'Chapter 1', nama_item: 'Fairy Feather (Sayap Peri)', jumlah: 'x3' },
    { id: 5, chapter: 'Chapter 1', nama_item: 'Thick Beak (Paruh tebal)', jumlah: 'x3' },
    { id: 6, chapter: 'Chapter 1', nama_item: 'Vine (Sulur)', jumlah: 'x3' },
    { id: 7, chapter: 'Chapter 2', nama_item: 'Swordsman Stone Coin (Koin Ksatria)', jumlah: 'x20' },
    { id: 8, chapter: 'Chapter 3', nama_item: 'Sand Mole Meat (Daging Tikus Pasir)', jumlah: 'x1' },
    { id: 9, chapter: 'Chapter 3', nama_item: 'Beast Claw (Cakar Binatang Buas)', jumlah: 'x5' },
    { id: 10, chapter: 'Chapter 3', nama_item: 'Sand Frog Skin (Kulit Kodok Pasir)', jumlah: 'x5' },
    { id: 11, chapter: 'Chapter 3', nama_item: 'Jagged Fang (Taring Bergerigi)', jumlah: 'x10' },
    { id: 12, chapter: 'Chapter 3', nama_item: 'Saham Crystal (Kristal Saham)', jumlah: 'x5' },
    { id: 13, chapter: 'Chapter 3', nama_item: 'Spiritual Gemstone (Permata Jiwa)', jumlah: 'x1' },
    { id: 14, chapter: 'Chapter 8', nama_item: 'Rokoko Grape (Anggur rokoko)', jumlah: 'x5' },
    { id: 15, chapter: 'Chapter 9', nama_item: 'Labilans Wood (Kayu labilans)', jumlah: 'x10' },
    { id: 16, chapter: 'Chapter 11', nama_item: 'Broken Horn (Tanduk Patah)', jumlah: 'x20' },
    { id: 17, chapter: 'Chapter 12', nama_item: 'Jabali Stone (Batu Jabali)', jumlah: 'x5' },
    { id: 18, chapter: 'Chapter 12', nama_item: 'Growing Ore (Biji Berkembang)', jumlah: 'x5' },
];

// --- HELPER FUNCTIONS ---

export const TOTAL_ITEMS = mqData.length;

// Mengambil daftar chapter unik untuk dropdown filter
export const getAllChapters = () => {
    return [...new Set(mqData.map(m => m.chapter))].sort((a, b) => {
        // Sortir berdasarkan nomor chapter (Chapter 1, Chapter 2, dst)
        return parseInt(a.replace('Chapter ', '')) - parseInt(b.replace('Chapter ', ''));
    });
}

// Fungsi Pencarian berdasarkan Nama Item atau Chapter
export function searchMQ(keyword) {
    const key = keyword.toLowerCase();
    return mqData.filter(m =>
        (m.nama_item && m.nama_item.toLowerCase().includes(key)) ||
        (m.chapter && m.chapter.toLowerCase().includes(key))
    );
}

// Fungsi Filter berdasarkan Chapter
export function filterByChapter(chapterName) {
    if (!chapterName || chapterName === 'Semua Chapter') return mqData;
    return mqData.filter(m => m.chapter === chapterName);
}

// Fungsi Paginasi (disesuaikan agar format return sama dengan template Laravel/Inertia Anda)
export function paginateMQ(dataList = mqData, page = 1, perPage = 10) {
    const total = dataList.length;
    const limit = perPage === 'all' ? total : parseInt(perPage);
    const start = (page - 1) * limit;
    const paginatedData = dataList.slice(start, start + limit);

    return {
        data: paginatedData,
        total: total,
        current_page: page,
        per_page: limit,
        last_page: Math.ceil(total / limit),
        from: start + 1
    };
}