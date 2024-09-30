import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";

export default function App() {
  const [phone, setPhone] = useState("");

  // Hàm kiểm tra số điện thoại có hợp lệ không
  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^(09|03|07|08|05)\d{8}$/; // Số điện thoại Việt Nam hợp lệ
    return phoneRegex.test(phone.replace(/\D/g, "")); // Loại bỏ ký tự không phải số và kiểm tra
  };

  // Hàm xử lý khi nhấn nút "Tiếp tục"
  const handleContinue = () => {
    const cleanedPhone = phone.replace(/\D/g, ""); // Loại bỏ ký tự không phải số
    if (validatePhoneNumber(cleanedPhone)) {
      Alert.alert("Số điện thoại hợp lệ!");
    } else {
      Alert.alert("Số điện thoại không hợp lệ!");
    }
  };

  // Hàm tự động định dạng số điện thoại khi nhập
  const formatPhoneNumber = (input) => {
    // Loại bỏ ký tự không phải số
    const cleaned = input.replace(/\D/g, "");
    // Tạo định dạng 3-3-4 (XXX XXX XXXX)
    const formatted = cleaned
      .replace(/(\d{3})(\d{3})(\d{0,4})/, "$1 $2 $3")
      .trim();
    return formatted;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <Text style={styles.label}>Nhập số điện thoại</Text>
      <Text style={styles.description}>
        Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập số điện thoại của bạn"
        keyboardType="numeric"
        value={formatPhoneNumber(phone)} // Tự động format số điện thoại khi nhập
        onChangeText={(text) => setPhone(text)} // Cập nhật state khi nhập
      />
      <Button title="Tiếp tục" onPress={handleContinue} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "left", // Chữ "Đăng nhập" nằm phía trái màn hình
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    marginBottom: 20,
    color: "#666",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    fontSize: 18,
    borderRadius: 5,
    marginBottom: 20,
  },
});
