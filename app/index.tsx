import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
  Dimensions,
} from "react-native";
import {Stack} from "expo-router";

const MainScreen = () => {
  return (
    <ScrollView >
        <Stack.Screen options={{ title: "InfoFocus - Notícias" }} />
      <View style={Styles.header}>
        <Text style={Styles.logoText}>
          Info<Text style={Styles.logoSpan}>Focus</Text>
        </Text>
        <Text style={Styles.sloganText}>A Notícia {"\n"} Perto de Você</Text>
      </View>

      <View style={Styles.navBar}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={Styles.navLinks}
        >
          <TouchableOpacity>
            <Text style={Styles.navText}>Início</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={Styles.navText}>Notícia do Dia</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={Styles.navText}>Política</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={Styles.navText}>Economia</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={Styles.navText}>Esportes</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={Styles.navText}>Contato</Text>
          </TouchableOpacity>
        </ScrollView>

        <View style={Styles.searchContainer}>
          <TextInput
            style={Styles.searchInput}
            placeholder="Buscar..."
            placeholderTextColor="#ddd"
          />
          <Text style={Styles.searchIcon}>🔍</Text>
        </View>
      </View>

      <View style={Styles.mainContent}>
        <Text style={Styles.sectionTitle}>Notícias em Destaque</Text>

        <View style={Styles.destaqueContainer}>
          <View style={Styles.cardGrande}>
            <Image
              source={require("./image/otan.png")}
              style={Styles.imageFull}
              resizeMode="cover"
            />
            <View style={Styles.overlay}>
              <Text style={Styles.overlayTitle}>
                Tensões na OTAN aumentam após cúpula
              </Text>
            </View>
          </View>

          <View style={Styles.colunaDestaque}>
            <View style={Styles.cardPequeno}>
              <Image
                source={require("./image/pl-antifaccao.png")}
                style={Styles.imageFull}
                resizeMode="cover"
              />
              <View style={Styles.overlay}>
                <Text style={Styles.overlayTitleSmall}>
                  Projeto de Lei Antifacção
                </Text>
              </View>
            </View>
            <View style={Styles.cardPequeno}>
              <Image
                source={require("./image/enem-fraude.png")}
                style={Styles.imageFull}
                resizeMode="cover"
              />
              <View style={Styles.overlay}>
                <Text style={Styles.overlayTitleSmall}>
                  Fraude no Enem investigada
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={Styles.gridInferior}>
          <View style={Styles.cardVertical}>
            <Image
              source={require("./image/notebook.jpg")}
              style={Styles.imageVertical}
              resizeMode="cover"
            />
            <View style={Styles.overlay}>
              <Text style={Styles.overlayTitleSmall}>
                Novos notebooks chegam ao mercado
              </Text>
            </View>
          </View>

          <View style={Styles.cardVertical}>
            <Image
              source={require("./image/cv-kennedy.png")}
              style={Styles.imageVertical}
              resizeMode="cover"
            />
            <View style={Styles.overlay}>
              <Text style={Styles.overlayTitleSmall}>
                Tiroteio na Vila Kennedy
              </Text>
            </View>
          </View>

          <View style={Styles.cardVertical}>
            <Image
              source={require("./image/dengue.png")}
              style={Styles.imageVertical}
              resizeMode="cover"
            />
            <View style={Styles.overlay}>
              <Text style={Styles.overlayTitleSmall}>
                Avanços na cura da dengue
              </Text>
            </View>
          </View>
        </View>


        <View style={Styles.sidebar}>
          <View style={Styles.widget}>
            <Text style={Styles.widgetTitle}>Categorias</Text>
            <View style={Styles.listContainer}>
              <Text style={Styles.listItem}>• Educação</Text>
              <Text style={Styles.listItem}>• Inteligência Artificial</Text>
              <Text style={Styles.listItem}>• Crimes</Text>
              <Text style={Styles.listItem}>• Comércio</Text>
            </View>
          </View>

          <View style={Styles.widget}>
            <Text style={Styles.widgetTitle}>Mais Lidas</Text>
            <View style={Styles.listContainer}>
              <Text style={Styles.listItem}>1. Como declarar Imposto</Text>
              <Text style={Styles.listItem}>2. Avanço da IA no trabalho</Text>
              <Text style={Styles.listItem}>3. Resultados do Futebol</Text>
              <Text style={Styles.listItem}>4. Previsão do tempo</Text>
            </View>
          </View>
        </View>
        </View>


      <View style={Styles.footer}>
        <Text style={Styles.footerTitle}>Info<Text style={Styles.footerSpan}>Focus</Text></Text>
        <Text style={Styles.footerText}>
          Sua fonte diária de notícias confiáveis e análises aprofundadas.
        </Text>
        <View style={Styles.footerLinks}>
          <Text style={Styles.footerLinkItem}>
            Início | Notícia do Dia | Contato
          </Text>
        </View>
        <Text style={Styles.copyText}>
          &copy; 2025 InfoFocus. Todos os direitos reservados.
        </Text>
      </View>
    </ScrollView>
  );
};

export default MainScreen;

const Styles = StyleSheet.create({
  
  // --- HEADER ---
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  logoText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000",
  },

  logoSpan: {
    color: "#e48282",
  },

  sloganText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#555",
    marginTop: 5,
  },

  // --- NAV BAR ---
  navBar: {
    backgroundColor: "#e48282",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  navLinks: {
    flexDirection: "row",
    marginBottom: 10,
  },
  navText: {
    color: "#fff",
    fontWeight: "bold",
    marginRight: 20,
    fontSize: 15,
  },
  searchContainer: {
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 5,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: "#fff",
  },
  searchIcon: {
    color: "#fff",
  },

  // --- CONTENT GERAL ---
  mainContent: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
    borderLeftWidth: 4,
    borderLeftColor: "#e48282",
    paddingLeft: 10,
  },

  destaqueContainer: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
    height: 330,
  },
  cardGrande: {
    flex: 1.5,
    borderRadius: 8,
    overflow: "hidden",
    position: "relative",
  },
  colunaDestaque: {
    flex: 1,
    flexDirection: "column",
    gap: 10,
  },
  cardPequeno: {
    flex: 1,
    borderRadius: 8,
    overflow: "hidden",
    position: "relative",
  },
  imageFull: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.7)",
    padding: 8,
  },
  overlayTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  overlayTitleSmall: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },

  gridInferior: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    gap: 5,
  },
  cardVertical: {
    width: "32%",
    height: 120,
    borderRadius: 8,
    overflow: "hidden",
    position: "relative",
  },
  imageVertical: {
    width: "100%",
    height: "100%",
  },

  techSection: {
    marginBottom: 20,
  },
  cardHorizontal: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginBottom: 15,
    borderRadius: 8,
    overflow: "hidden",
    elevation: 2,
  },
  imageHorizontal: {
    width: 120,
    height: 120,
  },
  contentHorizontal: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
  },
  techTitle: {
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 5,
  },
  techDesc: {
    fontSize: 12,
    color: "#666",
    marginBottom: 5,
  },
  linkText: {
    color: "#e48282",
    fontWeight: "bold",
    fontSize: 12,
  },

  // --- SIDEBAR ---//
  sidebar: {
    marginBottom: 20,
  },
  widget: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    elevation: 1,
  },
  widgetTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#eee",
    paddingBottom: 5,
  },
  listContainer: {
    gap: 8,
  },
  listItem: {
    fontSize: 14,
    color: "#444",
  },

    // --- FOOTER --- 
  footer: {
    backgroundColor: "#333",
    padding: 20,
    alignItems: "center",
  },

  footerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  footerText: {
    color: "#aaa",
    textAlign: "center",
    marginBottom: 15,
    fontSize: 12,
  },
  footerLinks: {
    marginBottom: 15,
  },
  footerLinkItem: {
    color: "#fff",
    fontSize: 12,
  },

  footerSpan: {
    color: "#e48282",
  },

  copyText: {
    color: "#666",
    fontSize: 10,
  },
});
