import { ScrollView, StyleSheet, Text, View } from "react-native";

const skills = [
  { id: "1", name: "JavaScript", emoji: "💻" },
  { id: "2", name: "React Native", emoji: "📱" },
  { id: "3", name: "Гра на гітарі", emoji: "🎸" },
  { id: "4", name: "Читання книг", emoji: "📚" },
  { id: "5", name: "Подорожі", emoji: "✈️" },
];

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.avatar}>
        <Text style={styles.avatarIcon}>👤</Text>
      </View>

      <Text style={styles.name}>Нікіта</Text>
      <Text style={styles.role}>Студент, майбутній розробник</Text>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Про мене</Text>
        <Text style={styles.paragraph}>
          Привіт! Мене звати Нікіта. Я вивчаю React Native, бо хочу створювати
          мобільні додатки. Люблю музику, книги та подорожі. Сподіваюсь стати
          професійним розробником.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Мої навички та інтереси</Text>
        {skills.map((skill) => (
          <View key={skill.id} style={styles.skillRow}>
            <Text style={styles.skillEmoji}>{skill.emoji}</Text>
            <Text style={styles.skillName}>{skill.name}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    padding: 20,
    alignItems: "center",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  avatarIcon: {
    fontSize: 60,
    color: "#999",
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1a1a2e",
    marginBottom: 4,
  },
  role: {
    fontSize: 16,
    color: "#666",
    marginBottom: 24,
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1a1a2e",
    marginBottom: 12,
  },
  paragraph: {
    fontSize: 15,
    color: "#444",
    lineHeight: 22,
  },
  skillRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
  skillEmoji: {
    fontSize: 22,
    marginRight: 12,
  },
  skillName: {
    fontSize: 16,
    color: "#333",
  },
});
