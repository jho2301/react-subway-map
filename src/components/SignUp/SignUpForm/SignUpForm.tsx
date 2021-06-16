import { FormEvent, VFC } from 'react';
import Button from '../../@common/Button/Button.styles';
import AuthForm from '../../@mixins/Auth/AuthForm';
import useSignUp from '../../../service/hooks/useSignUp';
import ValidationInput from '../../@mixins/ValidationInput/ValidationInput';

const SignUpForm: VFC = () => {
  const {
    form,
    setEmail,
    setAge,
    setPassword,
    setPasswordForValidation,
    signUp,
    isFormValid,
    isValidEmail,
    isValidAge,
    isValidPassword,
    isValidPasswordForValidation,
  } = useSignUp();

  const handleSignUp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    signUp();
  };

  return (
    <AuthForm title="회원가입" onSubmit={handleSignUp}>
      <ValidationInput
        value={form.email}
        onChange={({ target: { value } }) => setEmail(value)}
        placeholder="이메일을 입력해주세요."
        isValid={isValidEmail}
        invalidText="이메일 양식에 맞게 입력해주세요."
        validText="올바른 이메일입니다."
      />
      <ValidationInput
        type="number"
        value={form.age}
        min={1}
        onChange={({ target: { valueAsNumber } }) => setAge(valueAsNumber)}
        placeholder="나이를 입력해주세요."
        isValid={isValidAge}
        validText="올바른 나이입니다."
        invalidText=" 1세 이상만 가입할 수 있습니다."
      />

      <ValidationInput
        type="password"
        value={form.password}
        onChange={({ target: { value } }) => setPassword(value)}
        placeholder="비밀번호를 입력해주세요."
        isValid={isValidPassword}
        validText="올바른 비밀번호입니다."
        invalidText="6자 이상의 비밀번호를 입력해주세요."
      />
      <ValidationInput
        type="password"
        value={form.passwordForValidation}
        onChange={({ target: { value } }) => setPasswordForValidation(value)}
        placeholder="비밀번호를 한번 더 입력해주세요."
        isValid={isValidPasswordForValidation}
        validText="비밀번호와 동일합니다."
        invalidText="비밀번호와 같지 않습니다."
      />

      <Button disabled={!isFormValid}>회원가입</Button>
    </AuthForm>
  );
};

export default SignUpForm;
