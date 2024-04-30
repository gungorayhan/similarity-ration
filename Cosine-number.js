function calculateCosineSimilarity(vector1, vector2) {
    // Vektörlerin iç çarpımını hesapla
    let dotProduct = 0;
    for (let i = 0; i < vector1.length; i++) {
        dotProduct += vector1[i] * vector2[i];
    }

    // Vektörlerin normlarını hesapla
    let normVector1 = 0;
    let normVector2 = 0;
    for (let i = 0; i < vector1.length; i++) {
        normVector1 += Math.pow(vector1[i], 2);
        normVector2 += Math.pow(vector2[i], 2);
    }
    normVector1 = Math.sqrt(normVector1);
    normVector2 = Math.sqrt(normVector2);

    // Cosine benzerliğini hesapla
    const similarity = dotProduct / (normVector1 * normVector2);

    return similarity;
}

// Örnek vektörler
const vector1 = [2, 3, 1, 0];
const vector2 = [1, 2, 3, 4];

// Cosine benzerliğini hesapla
const similarity = calculateCosineSimilarity(vector1, vector2);
console.log("Cosine Benzerliği:", similarity);