import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from './styles'
import { useState } from "react";

export default function Input ({setTask, task}: {setTask: Function; task: string[]}) {
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState('');

  const handleAddTask = () => {
    if(text.trim().length > 0){
      setTask([...task, text.trim()])
      setText('')
    }
  }

  return(
    <View style={styles.container}>
      <TextInput
        style={[
          styles.input,
          isFocused && { borderColor: "#1E6F9F", borderWidth: 2 },
        ]}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={text}
        onChangeText={setText}
      />
      <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={handleAddTask}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </View>
  )
}