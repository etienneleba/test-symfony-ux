import { startStimulusApp } from '@symfony/stimulus-bridge';
import TextareaAutogrow from "stimulus-textarea-autogrow";
import AnimatedNumber from "stimulus-animated-number";
import ScrollProgress from "stimulus-scroll-progress";
import PasswordVisibility from "stimulus-password-visibility";

// Registers Stimulus controllers from controllers.json and in the controllers/ directory
export const app = startStimulusApp(require.context(
    '@symfony/stimulus-bridge/lazy-controller-loader!./controllers',
    true,
    /\.(j|t)sx?$/
));

app.register("textarea-autogrow", TextareaAutogrow);
app.register("animated-number", AnimatedNumber);
app.register("scroll-progress", ScrollProgress);
app.register("password-visibility", PasswordVisibility)
