// İki metin arasındaki Levenshtein mesafesini hesaplar
function levenshteinDistance(str1, str2) {
    const len1 = str1.length;
    const len2 = str2.length;
  
    // İki boyutlu matris oluşturulur ve başlangıç değerleri atanır
    const matrix = [];
    for (let i = 0; i <= len1; i++) {
        matrix[i] = [i];
    }
    for (let j = 0; j <= len2; j++) {
        matrix[0][j] = j;
    }
  
    // Levenshtein mesafesi hesaplanır
    for (let j = 1; j <= len2; j++) {
        for (let i = 1; i <= len1; i++) {
            if (str1[i - 1] === str2[j - 1]) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j] + 1,    // Deletion
                    matrix[i][j - 1] + 1,    // Insertion
                    matrix[i - 1][j - 1] + 1 // Substitution
                );
            }
        }
    }
  
    // Hesaplanan Levenshtein mesafesi döndürülür
    return matrix[len1][len2];
}

// İki metin arasındaki benzerlik oranını hesaplar
function calculateSimilarity(text1, text2) {
    // Metinlerin uzunluklarını alır
    const len1 = text1.length;
    const len2 = text2.length;
  
    // Metinlerin uzunluklarının maksimum değerini alır
    const maxLength = Math.max(len1, len2);
  
    // Levenshtein mesafesini hesaplar
    const distance = levenshteinDistance(text1, text2);
  
    // Benzerlik oranını hesaplar
    const similarity = 1 - (distance / maxLength);
  
    return similarity;
}

// Örnek metinler
const text1 = "merhaba";
const text2 = "merhabalar";
const text3 = "hello";
const text4 = "merhaba";

// Benzerlik oranlarını hesaplar
const similarity1 = calculateSimilarity(text1, text2);
const similarity2 = calculateSimilarity(text1, text3);
const similarity3 = calculateSimilarity(text1, text4);

console.log("Benzerlik Oranı 1:", similarity1);
console.log("Benzerlik Oranı 2:", similarity2);
console.log("Benzerlik Oranı 3:", similarity3);