import { FlatList, StyleSheet, Text, View } from "react-native";

const places = [
  {
    id: "1",
    name: "Парк Шевченка",
    description: "Великий парк у центрі міста, гарне місце для прогулянок.",
    emoji: "🌳",
  },
  {
    id: "2",
    name: "Оперний театр",
    description: "Історична будівля 19 століття, тут проходять вистави.",
    emoji: "🎭",
  },
  {
    id: "3",
    name: "Набережна",
    description: "Мальовниче місце для прогулянок вздовж річки.",
    emoji: "🌊",
  },
  {
    id: "4",
    name: "Старе місто",
    description: "Вузькі вулички з історичною архітектурою та кав'ярнями.",
    emoji: "🏛️",
  },
];

export default function CityScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Моє місто</Text>
      <Text style={styles.subheader}>Визначні місця</Text>

      <FlatList
        data={places}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.emoji}>{item.emoji}</Text>
            <View style={styles.cardContent}>
              <Text style={styles.placeName}>{item.name}</Text>
              <Text style={styles.placeDescription}>{item.description}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1a1a2e",
    marginBottom: 4,
  },
  subheader: {
    fontSize: 18,
    color: "#666",
    marginBottom: 20,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: "center",
  },
  emoji: {
    fontSize: 32,
    marginRight: 16,
  },
  cardContent: {
    flex: 1,
  },
  placeName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1a1a2e",
    marginBottom: 4,
  },
  placeDescription: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
});
