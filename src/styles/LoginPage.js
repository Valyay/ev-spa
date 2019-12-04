import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 500px;
    width: 300px;
    padding: 5px 10px;
    border: 1 px solid black;
    border-radius: 3px;
    border: 1px solid rgb(204, 204, 204);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

export const InputContainer = styled.div`
    width: 100%;
    height: 150px;
`;

export const CustomField = styled(TextField)({
    width: '100%'
});

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const CustomButton = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    cursor: 'pointer'
});
