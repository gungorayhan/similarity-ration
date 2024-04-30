function calculateJaccardSimilarity(title1, title2) {
    // Başlıkları kümelere dönüştürme
    const words1 = new Set(title1.toLowerCase().split(' '));
    const words2 = new Set(title2.toLowerCase().split(' '));

    // Küme boyutlarını al
    const words1Size = words1.size;
    const words2Size = words2.size;

    // İki başlık arasındaki kesişim kümesi
    const intersection = new Set([...words1].filter(word => words2.has(word)));

    // Kesişim kümesi boyutunu al
    const intersectionSize = intersection.size;

    // Jaccard benzerliğini hesapla
    const similarity = (intersectionSize / (words1Size + words2Size - intersectionSize))*100;
    
    return similarity;
}

function compareTitles(titleList1, titleList2) {
    const similarityMatrix = [];
    
    // Her bir başlık çifti için benzerlik oranını hesapla
    for (let title1 of titleList1) {
        for (let title2 of titleList2) {
            const similarity = calculateJaccardSimilarity(title1, title2);
            similarityMatrix.push({
                title1,
                title2,
                similarity
            });
        }
    }

    return similarityMatrix;
}

// Örnek başlık listeleri
const titleList1 = [
    "JavaScript kod örnekleri",
    "Nesne yönelimli programlama",
    "Web geliştirme teknolojileri",
    // Diğer başlıklar...
];

const titleList2 = [
    "Başlıklarla ilgili JavaScript örneği",
    "Web geliştirme ve tasarım",
    "Fonksiyonel programlama dilleri",
    "JavaScript kod örnekleri",
];

// Başlık listelerini karşılaştır
const similarityMatrix = compareTitles(titleList1, titleList2);
console.log(similarityMatrix);