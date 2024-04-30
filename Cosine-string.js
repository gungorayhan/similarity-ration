const natural = require('natural');

// Örnek metinler
const text1 = "Bu bir örnek metin.";
const text2 = "Bu da bir örnek cümlesi.";

// Metinleri token'ize etme (kelimelere ayırma)
const tokenizer = new natural.WordTokenizer();
const tokens1 = tokenizer.tokenize(text1);
const tokens2 = tokenizer.tokenize(text2);

// TF-IDF vektörlerini oluşturma
const tfidf = new natural.TfIdf();
tfidf.addDocument(tokens1);
tfidf.addDocument(tokens2);

// TF-IDF vektörlerini alıp cosine benzerliğini hesaplama
const vector1 = tfidf.listTerms(0).map(term => term.tfidf);
const vector2 = tfidf.listTerms(1).map(term => term.tfidf);
const similarity = natural.JaroWinklerDistance(vector1, vector2);

console.log("Cosine Benzerliği:", similarity);