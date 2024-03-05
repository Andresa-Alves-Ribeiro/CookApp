import { Alert, ScrollView, View } from "react-native";
import Ingredient from "../Ingredient";
import { styles } from "./styles";
import { useState } from "react";
import Selected from "../Selected";

export default function Ingredients() {
    const [selected, setSelected] = useState<string[]>([])

    function handleToggleSelect(value: string) {
        if (selected.includes(value)) {
            return setSelected((state) => state.filter((item) => item !== value))
        }

        setSelected((state) => [...state, value])
    }

    function handleClearSelected() {
        Alert.alert(
            "Limpar",
            "Deseja limpar tudo?",
            [
                { text: "Não", onPress: () => console.log("Não limpar") },
                { text: "Sim", onPress: () => setSelected([]) }
            ]
        )
    }    

    return (
        <>
            <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
                {Array.from({ length: 100 }).map((item, index) => (
                    <Ingredient key={index} name="maçã" image="" selected={selected.includes(String(index))} onPress={() => handleToggleSelect(String(index))} />
                ))}

            </ScrollView>

            {selected.length > 0 && (
                <Selected quantity={selected.length} onClear={handleClearSelected} onSearch={() => { }} />
            )}
        </>
    )
}