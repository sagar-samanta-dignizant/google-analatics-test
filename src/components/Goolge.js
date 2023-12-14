// YourFormComponent.js
import ReactGA from 'react-ga';

const Google = () => {
    const handleSubmit = async () => {
        try {

            // If the submission is successful, track the event
            ReactGA.event({
                category: 'Form',
                action: 'Submission',
                label: 'Success',
            });
        } catch (error) {
            // Handle errors
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Your form components */}
            <button type="submit">Submit</button>
        </form>
    );
};

export default Google;
