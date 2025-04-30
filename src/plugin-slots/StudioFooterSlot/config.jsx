import { DIRECT_PLUGIN, PLUGIN_OPERATIONS } from '@openedx/frontend-plugin-framework';

const config = {
    pluginSlots: {
        'org.openedx.frontend.layout.studio_footer.v1': {
            plugins: [
                {
                    // Hide the default footer
                    op: PLUGIN_OPERATIONS.Hide,
                    widgetId: 'default_contents',
                },
                {
                    // Insert your custom footer
                    op: PLUGIN_OPERATIONS.Insert,
                    widget: {
                        id: 'custom_footer',
                        type: DIRECT_PLUGIN,
                        RenderWidget: () => (
                            // Your custom footer JSX here
                            <footer className="custom-footer">
                                {/* Add your footer content */}
                                <div className="text-red-500">My own footer</div>
                            </footer>
                        ),
                    },
                },
            ]
        }
    },
}

export default config;
