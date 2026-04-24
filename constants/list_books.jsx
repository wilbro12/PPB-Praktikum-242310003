import { View, Text, StatusBar, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BookCollectioins from "./componentss/BookCollectioins";
import Categoriesnav from "./componentss/Categories";
import CTABook from "./componentss/CTABook";
import Header from "./componentss/Header";

const ListBook = [
  {
    id: 1,
    title: "Malin Kundang Anak Durhaka",
    img: require("../assets/malin.jpg"),
    author: "R. A. Pratama",
    rating: 4.5,
    views: 120,
    is_free: true,
    sinopsis: "Cerita rakyat tentang anak durhaka",
    story: "Pada zaman dahulu..."
  },
  {
    id: 2,
    title: "Lutung Kasarung",
    img: require("../assets/lutung.jpg"),
    author: "Tim Hikmah Media",
    rating: 4.2,
    views: 95,
    is_free: false,
    sinopsis: "Cerita rakyat Sunda",
    story: "Alkisah..."
  }
];