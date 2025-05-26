import { useState } from 'react';
import Button, {
  PrimaryButton,
  PrimaryOutlinedButton,
  PrimaryDisabledButton,
  PrimaryOutlinedDisabledButton,
  SecondaryButton,
  SecondaryOutlinedButton,
  SecondaryDisabledButton,
  SecondaryOutlinedDisabledButton,
  TertiaryButton,
  TertiaryOutlinedButton,
  TertiaryDisabledButton,
  TertiaryOutlinedDisabledButton,
  NeutralButton,
  NeutralOutlinedButton,
  NeutralDisabledButton,
  NeutralOutlinedDisabledButton,
  OutlineButton,
  OutlineOutlinedButton,
  OutlineDisabledButton,
  OutlineOutlinedDisabledButton,
  DangerButton,
  DangerOutlinedButton,
  DangerDisabledButton,
  DangerOutlinedDisabledButton,
  SuccessButton,
  SuccessOutlinedButton,
  SuccessDisabledButton,
  SuccessOutlinedDisabledButton,
  WarningButton,
  WarningOutlinedButton,
  WarningDisabledButton,
  WarningOutlinedDisabledButton,
  ButtonGroup
} from './button-components';

const ButtonShowcase = () => {
  const [activeIndices, setActiveIndices] = useState({
    primary: 0,
    secondary: 0,
    tertiary: 0,
    neutral: 0,
    outline: 0,
    danger: 0,
    success: 0,
    warning: 0,
  });

  const handleButtonGroupClick = (variant, index) => {
    setActiveIndices(prev => ({
      ...prev,
      [variant]: index
    }));
  };
  
  const renderSectionTitle = (title) => (
    <h2 className="text-xl font-bold mb-4 mt-8 text-[var(--color-heading-h2)]">{title}</h2>
  );

  const renderButtonSet = (title, ButtonComponent, OutlinedButtonComponent, DisabledButtonComponent, OutlinedDisabledButtonComponent) => (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-3 text-[var(--color-heading-h3)]">{title}</h3>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-2 items-center p-4 bg-[var(--color-bg-card)] rounded">
          <h4 className="text-sm text-[var(--color-text-label)]">Standard</h4>
          <ButtonComponent>Button</ButtonComponent>
        </div>
        <div className="flex flex-col gap-2 items-center p-4 bg-[var(--color-bg-card)] rounded">
          <h4 className="text-sm text-[var(--color-text-label)]">Outlined</h4>
          <OutlinedButtonComponent>Button</OutlinedButtonComponent>
        </div>
        <div className="flex flex-col gap-2 items-center p-4 bg-[var(--color-bg-card)] rounded">
          <h4 className="text-sm text-[var(--color-text-label)]">Disabled</h4>
          <DisabledButtonComponent>Button</DisabledButtonComponent>
        </div>
        <div className="flex flex-col gap-2 items-center p-4 bg-[var(--color-bg-card)] rounded">
          <h4 className="text-sm text-[var(--color-text-label)]">Outlined Disabled</h4>
          <OutlinedDisabledButtonComponent>Button</OutlinedDisabledButtonComponent>
        </div>
      </div>
    </div>
  );
  
  const renderButtonGroup = (title, variant, count = 5) => {
    const variantKey = variant.toLowerCase();
    
    return (
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-3 text-[var(--color-heading-h3)]">{title} Button Groups</h3>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-4 p-4 bg-[var(--color-bg-card)] rounded">
            <h4 className="text-sm text-[var(--color-text-label)]">Standard Group</h4>
            <ButtonGroup 
              count={count} 
              variant={variantKey} 
              activeIndex={activeIndices[variantKey]}
              onButtonClick={(index) => handleButtonGroupClick(variantKey, index)}
            />
          </div>
          <div className="flex flex-col gap-4 p-4 bg-[var(--color-bg-card)] rounded">
            <h4 className="text-sm text-[var(--color-text-label)]">Outlined Group</h4>
            <ButtonGroup 
              count={count} 
              variant={variantKey} 
              outlined
              activeIndex={activeIndices[variantKey]}
              onButtonClick={(index) => handleButtonGroupClick(variantKey, index)}
            />
          </div>
          <div className="flex flex-col gap-4 p-4 bg-[var(--color-bg-card)] rounded">
            <h4 className="text-sm text-[var(--color-text-label)]">Disabled Group</h4>
            <ButtonGroup 
              count={count} 
              variant={variantKey} 
              disabled
            />
          </div>
          <div className="flex flex-col gap-4 p-4 bg-[var(--color-bg-card)] rounded">
            <h4 className="text-sm text-[var(--color-text-label)]">Outlined Disabled Group</h4>
            <ButtonGroup 
              count={count} 
              variant={variantKey} 
              outlined
              disabled
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-6 bg-[var(--color-bg-app)] min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-[var(--color-heading-h1)]">Button Component Library</h1>
      
      <div className="bg-[var(--color-bg-content)] p-6 rounded-lg shadow-md">
        {renderSectionTitle("Basic Button Variants")}
        
        {renderButtonSet("Primary Buttons", 
          PrimaryButton, 
          PrimaryOutlinedButton, 
          PrimaryDisabledButton, 
          PrimaryOutlinedDisabledButton
        )}
        
        {renderButtonSet("Secondary Buttons", 
          SecondaryButton, 
          SecondaryOutlinedButton, 
          SecondaryDisabledButton, 
          SecondaryOutlinedDisabledButton
        )}
        
        {renderButtonSet("Tertiary Buttons", 
          TertiaryButton, 
          TertiaryOutlinedButton, 
          TertiaryDisabledButton, 
          TertiaryOutlinedDisabledButton
        )}
        
        {renderButtonSet("Neutral Buttons", 
          NeutralButton, 
          NeutralOutlinedButton, 
          NeutralDisabledButton, 
          NeutralOutlinedDisabledButton
        )}
        
        {renderButtonSet("Outline Buttons", 
          OutlineButton, 
          OutlineOutlinedButton, 
          OutlineDisabledButton, 
          OutlineOutlinedDisabledButton
        )}
        
        {renderSectionTitle("Semantic Button Variants")}
        
        {renderButtonSet("Danger Buttons", 
          DangerButton, 
          DangerOutlinedButton, 
          DangerDisabledButton, 
          DangerOutlinedDisabledButton
        )}
        
        {renderButtonSet("Success Buttons", 
          SuccessButton, 
          SuccessOutlinedButton, 
          SuccessDisabledButton, 
          SuccessOutlinedDisabledButton
        )}
        
        {renderButtonSet("Warning Buttons", 
          WarningButton, 
          WarningOutlinedButton, 
          WarningDisabledButton, 
          WarningOutlinedDisabledButton
        )}
        
        {renderSectionTitle("Button Groups")}
        
        {renderButtonGroup("Primary", "Primary")}
        {renderButtonGroup("Secondary", "Secondary")}
        {renderButtonGroup("Tertiary", "Tertiary")}
        {renderButtonGroup("Neutral", "Neutral")}
        {renderButtonGroup("Outline", "Outline")}
        {renderButtonGroup("Danger", "Danger")}
        {renderButtonGroup("Success", "Success")}
        {renderButtonGroup("Warning", "Warning")}
      </div>
    </div>
  );
};

export default ButtonShowcase;