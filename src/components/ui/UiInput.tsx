import UiField from "./UiField";
import styles from './UiInput.module.scss';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input/input';

export type OnChangeParams = { name: string; value: string | null };
interface Props {
  label?: string;
  value: string | null | number;
  placeholder?: string;
  /** The name property should always be the same as the model value. example if the input belongs to
   * formData.confirm_password, the name prop should be confirm_password.
   */
  name: string;
  type?: 'text' | 'phone'
  error?: string;
  disabled?: boolean;
  inputRef?: React.RefObject<HTMLInputElement>;
  onChange: (event: OnChangeParams) => void;
}

export default function UiInput({
  label,
  name,
  type,
  value,
  placeholder,
  disabled,
  error,
  inputRef,
  onChange,
}: Props) {

  function sendValue(e: { target: { name: string; value: string } }) {
      onChange({ name: e.target.name, value: e.target.value });
  }

  function sendPhone(value: string | null | undefined) {
    onChange({ name, value: value || null });
  }

  return (
    <UiField label={label} error={error}>
      <div className={styles.input_wrapper}>
          {type === 'phone' ? (
          <div className={styles.phone_wrapper}>
            <div className={styles.phone_tag}>+234</div>
            <PhoneInput
              value={`${value}` || ''}
              country="NG"
              className={`${styles.phone_input} ${error && styles.error}`}
              placeholder="e.g: 08034283438"
              onChange={(e) => sendPhone(e)}
            />
          </div>
        ) : (
          <input 
          className={`${styles.ui_input} ${error && styles.error}`}
          type="text" 
          value={value || ''}
          placeholder={placeholder}
          name={name}
          ref={inputRef}
          disabled={disabled}
          onChange={sendValue}/>
        )}
        
      </div>
    </UiField>
  );
}


// TODO: replace any with InputProps.
// const Input = styled.input<any>`
//   padding: ${pxToRem(16)};
//   height: ${({ size }) =>
//     `var(--base-height${['large', 'text'].includes(size) ? '' : `-${size}`})`};
//   gap: ${pxToRem(8)};
//   width: 100%;
//   font-size: ${pxToRem(14)};
//   font-family: 'thiccboi-medium';
//   border: ${pxToRem(1)} solid;
//   border-color: ${({ hasError }) =>
//     hasError ? 'var(--color-danger)' : 'var(--color-gray)'};
//   background: transparent;
//   outline: none;
//   border-radius: ${pxToRem(8)};
//   box-sizing: border-box;
//   transition: all 0.2s ease-in-out;
//   &:focus {
//     border: ${pxToRem(2)} solid var(--color-primary);
//     box-shadow: var(--box-shadow-primary);
//   }
//   ::placeholder {
//     font-size: ${pxToRem(14)};
//     color: var(--color-gray-80);
//     font-weight: 400;
//     line-height: ${pxToRem(24)};
//   }
// `;





