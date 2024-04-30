function calculateLevenshteinSimilarity(text1, text2) {
    // Tokenize metinleri
    const tokens1 = text1.split(' ');
    const tokens2 = text2.split(' ');

    // Token dizilerini birleştirerek birleşik metinleri oluştur
    const mergedText1 = tokens1.join('');
    const mergedText2 = tokens2.join('');

    // Levenshtein mesafesini hesapla
    const distance = levenshteinDistance(mergedText1, mergedText2);

    // Metin uzunluklarına göre normalize et
    const maxLength = Math.max(mergedText1.length, mergedText2.length);
    const similarity = 1 - (distance / maxLength);

    return similarity;
}

// Levenshtein mesafesi hesaplama
function levenshteinDistance(str1, str2) {
    const len1 = str1.length;
    const len2 = str2.length;
    const matrix = [];

    // Initialize matrix
    for (let i = 0; i <= len1; i++) {
        matrix[i] = [i];
    }
    for (let j = 0; j <= len2; j++) {
        matrix[0][j] = j;
    }

    // Calculate Levenshtein distance
    for (let j = 1; j <= len2; j++) {
        for (let i = 1; i <= len1; i++) {
            if (str1[i - 1] === str2[j - 1]) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j - 1] + 1
                );
            }
        }
    }

    return matrix[len1][len2];
}

// Örnek metinler
const text1 = "JavaScript kod örnekleri";
const text2 = "Başlıklarla ilgili JavaScript örneği";

// Benzerlik oranını hesapla
const similarity = calculateLevenshteinSimilarity(text1, text2);
console.log("Levenshtein Benzerliği:", similarity);