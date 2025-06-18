import { WizardProvider } from '@/lib/WizardContext';
import Wizard from './Wizard';
export default function Page() { return <WizardProvider><Wizard /></WizardProvider>; }