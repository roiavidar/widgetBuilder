/**
 * Created by roi.avidar on 08/06/2016.
 */
var widgetJson = {
    "component-data": {
        "type": "widget",
        "id": "uniqueID"
    },
    "component-placeholders": {
        "main": {
            "component-data": {
                "type": "menu",
                "id": "uniqueID",
                "skin-placeholders": {
                    "header": "default",
                    "body": "default"
                }
            },
            "component-placeholders": {
                "selection-1": {
                    "component-placeholders": {
                        "menu-item-1": {
                            "component-data": {
                                "type": "text",
                                "id": "uniqueID",
                                "text": "roi",
                                "skin-placeholders": {
                                    "text": "default"
                                }
                            }
                        },
                        "main-content": {
                            "component-data": {
                                "type": "image",
                                "id": "uniqueID",
                                "skin-placeholders": {
                                    "main": "spread"
                                }
                            }
                        }
                    }
                },
                "selection-2": {
                    "component-placeholders": {
                        "menu-item-2": {
                            "component-data": {
                                "type": "text",
                                "id": "uniqueID",
                                "skin-placeholders": {
                                    "text": "default"
                                }
                            }
                        },
                        "main-content": {
                            "type": "image",
                            "id": "uniqueID",
                            "skin-placeholders": {
                                "main": "spread"
                            }
                        }
                    }
                }
            }
        }
    }
};