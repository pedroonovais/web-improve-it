interface FormStepsProps {
    index: number
}

export const FormSteps = ({index}: FormStepsProps) => {
    switch (index){
        case 1:
            return <h2>Vou te fazer algumas perguntas para saber o que você deseja, ok?</h2>
        case 2:
            return (
                <p>Teste</p>
            )
    }
}