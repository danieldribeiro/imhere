import { FlatList, Image, Linking, Text, View } from 'react-native'
import { styles } from './styles'
import Input from '../../components/Input'
import Icon from 'react-native-vector-icons/Feather';
import Task from '../../components/Task';
import { useState } from "react";

export default function Home() {
  const [ task, setTask ] = useState([])
  const [chekedTasks, setChekedTasks] = useState(0)

  const removeTask = (index: number) => {
    setTask((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  const incrementCheckedTasks = () => {
    setChekedTasks((prev) => prev + 1);
  };

  const decrementCheckedTasks = () => {
    setChekedTasks((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../../assets/todo-logo.png')} style={styles.image}></Image>
      </View>

      <View style={styles.input}>
        <Input task={task} setTask={setTask}/>
      </View>

      <View style={styles.tasksInfoContainer}>
        <View style={styles.tasksInfo}>
          <Text style={styles.taskInfoTitle}>Criadas</Text>
          <Text style={styles.badgeText}>{task.length}</Text>
        </View>
        <View style={styles.tasksInfo}>
          <Text style={styles.taskInfoTitle}>Concluídas</Text>
          <Text style={styles.badgeText}>{chekedTasks}</Text>
        </View>
      </View>

      <FlatList
        data={task}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => 
        <Task 
          task={item} 
          onToggle={(checked) => {
            if (checked) incrementCheckedTasks();
            else decrementCheckedTasks();
          }}
          onDelete={() => removeTask(index)}
        />}
        ListEmptyComponent={() => (
          <View style={styles.main}>
            <Icon name="clipboard" size={60} color="#808080" style={styles.icon}/>
            <Text style={styles.mainText}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.text}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      />
    </View>
  )
}
