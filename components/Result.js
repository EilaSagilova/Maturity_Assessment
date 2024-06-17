import React from 'react';
import {View, Text, Button, StyleSheet, Pressable} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {resetQuiz} from '../redux/actions/quizActions';

const Result = ({onRestart}) => {
    const score = useSelector(state => state.quiz.score);
    const dispatch = useDispatch();

    const handleRestart = () => {
        dispatch(resetQuiz());
        onRestart();
    };

    function render_result_text(result) {
        console.log(result)
        if (result < 4.74) {
            return "В настоящее время вы принимаете решения в области 187-ФЗ, но при этом не обладаете полными и объективными знаниями о своей организации. Требуется еще накопить исходные данные для принятия решений относится ли Ваша организация к субъектам КИИ или нет."
        } else if (result > 4.75 && result < 9.49) {
            return "Вы находитесь в самом начале пути по реализации требований законодательства в части обеспечения безопасности КИИ. Предстоит еще немало открытий на этом пути, и это не всегда будут новые метрики и фреймворки ИБ или «нормативка» ФСТЭК России. Но разобравшись с процессным подходом, а также с функциональными ролями, вы приблизитесь к состоянию системы обеспечения безопасности КИИ, которой уже можно попытаться управлять… Есть о чем подумать: например, а как применить матрицу RACI))"
        } else if (result > 9.5 && result < 14.24) {
            return "Иногда лучшее не всегда то, к чему нужно стремиться. Требования законодательства в большей мере уже реализованы и достаточно качественно налажены процессы управления сложной системой взаимоотношений между специалистами ИБ и ИТ, но все еще сохраняются риски, связанные с регуляторикой. Больше внимания к деталям законодательства))"
        } else if (result > 14.25) {
            return "Прекрасный результат: Вы практически на пути к совершенной системе ИБ. Не стоит расслабляться, ведь условие успеха непрерывность процессов и постоянная оценка состояния выполнения требований для минимизации угроз безопасности информации."
        }
    }
    function render_result_maturity(result) {
        if (result < 4.74) {
            return "ОТСУТСТВУЮЩАЯ"
        } else if (result > 4.75 && result < 9.49) {
            return "НАЧАЛЬНАЯ"
        } else if (result > 9.5 && result < 14.24) {
            return "УПРАВЛЯЕМАЯ"
        } else if (result > 14.25) {
            return "УЛУЧШАЕМАЯ"
        }
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Степень вашей зрелости: {render_result_maturity(score)}</Text>
            <Text style={styles.result_text}>{render_result_text(score)}</Text>
            <Pressable style={styles.button} onPress={handleRestart}>
                <Text style={styles.text}>Начать заново</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    result_text: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#0F5D5D'
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});

export default Result;
