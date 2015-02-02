fil = new Array();
fil["0"]= "Administration/Administration_title.html@@@Administration@@@...";
fil["1"]= "Administration/DataCollectorAdministration.html@@@Data Collector Administration@@@You can view logs, JVM metrics, and shut down the Data Collector from the Administration menu...";
fil["2"]= "Data_Preview/DataPreview.html@@@Data Preview@@@When you preview data, the Preview panel uses different colors to represent different types of data. The Preview panel also uses colors and asterisks to highlight the field values and records that you have changed for testing...";
fil["3"]= "Data_Preview/DataPreview_Title.html@@@Data Preview@@@...";
fil["4"]= "Data_Preview/PreviewingMultipleStages.html@@@Previewing Multiple Stages@@@You can preview data for a set of linked stages within a pipeline. Preview multiple stages to verify that the set of stages processes data as expected...";
fil["5"]= "Data_Preview/PreviewingaSingleStage.html@@@Previewing and Tuning a Single Stage@@@You can preview data for a single stage. When you preview data for a single stage, you can also change the data to test stage processing. Preview data to verify that the stage processes data as expected...";
fil["6"]= "Destinations/Destinations_overview.html@@@Destinations@@@A destination stage represents the target data for the pipeline. You can use one or more destinations in a pipeline...";
fil["7"]= "Destinations/Destinations_title.html@@@Destinations@@@...";
fil["8"]= "Destinations/RequiredFieldsInDestinations.html@@@Required Fields in Destinations@@@A required field is a field that must exist in a record to keep it in the pipeline. You can configure required fields in destination stages to ensure that only records that include the required fields are written to pipeline destinations...";
fil["9"]= "Destinations/Trash.html@@@Trash@@@The Trash destination drops all records that you pass. Use the Trash destination during development as a placeholder for a real destination. You might also use the Trash destination as a visual representation of a stream of records to drop from the pipeline...";
fil["10"]= "Expression_Language/ExpressionLanguage_overview.html@@@Expression Language@@@The expression language enables you to create expressions that evaluate or modify data. Use the expression language to create expressions in the Expression processor and conditions in the Stream Selector processor...";
fil["11"]= "Expression_Language/ExpressionLanguage_title.html@@@Expression Language@@@...";
fil["12"]= "Getting_Started/DCollector_Window.html@@@Data Collector Window@@@The Data Collector window provides a user interface to configure pipelines, preview data, and monitor pipelines...";
fil["13"]= "Getting_Started/GettingStarted_Title.html@@@Getting Started@@@...";
fil["14"]= "Getting_Started/Installing_the_DC.html@@@Installing and Launching the Data Collector@@@Install the Data Collector on the machine that you want to run a pipeline. After installation, you can launch the Data Collector...";
fil["15"]= "Getting_Started/LoggingIn_CreatingPipeline.html@@@Logging In the First Time and Creating a Pipeline@@@After you start the Data Collector, you can log in to the Data Collector window and create your first pipeline...";
fil["16"]= "Getting_Started/Requirements.html@@@Installation Requirements@@@Install the Data Collector on a machine with the following minimum requirements...";
fil["17"]= "Getting_Started/What_isa_DataCollector.html@@@What is a Data Collector?@@@The StreamSets Data Collector is a lightweight, powerful engine that streams data in real time. Use the Data Collector to route and process data in your data streams...";
fil["18"]= "Glossary/GlossaryOfTerms.html@@@Glossary of Terms@@@destination A stage type used in a pipeline to represent where the Data Collector writes processed data. origin A stage type used in a pipeline to represent the source of data in a pipeline. pipeline...";
fil["19"]= "Glossary/Glossary_title.html@@@Glossary@@@...";
fil["20"]= "Origins/Directory.html@@@Directory@@@You can configure the following delimited file properties for the Directory origin...";
fil["21"]= "Origins/FileTail.html@@@File Tail@@@You can configure the following general properties for the File Tail origin...";
fil["22"]= "Origins/KConsumer.html@@@Kafka Consumer@@@You can add custom properties to pass Kafka configuration properties that you want to use...";
fil["23"]= "Origins/Origins_overview.html@@@Origins@@@You can preview raw source data when you configure an origin. Preview raw source data to verify the correct configuration for the origin...";
fil["24"]= "Origins/Origins_title.html@@@Origins@@@...";
fil["25"]= "Pipeline_Configuration/ConfiguringAPipeline.html@@@Configuring a Pipeline@@@Configure a pipeline to define the stream of data. After you configure the pipeline, you can start the pipeline...";
fil["26"]= "Pipeline_Configuration/DataCollectorWindow-Config.html@@@Data Collector Window - Configuration Mode@@@The following image shows the the Data Collector window when you configure a pipeline: Area / Icon Name Description 1 Pipeline canvas Displays the pipeline. Use to configure the stages for the...";
fil["27"]= "Pipeline_Configuration/ErrorHandling.html@@@Error Handling@@@Each stage in the pipeline includes built-in resilience. Some stages also include configurable error handling. When the Data Collector encounters an unexpected error, it stops the pipeline...";
fil["28"]= "Pipeline_Configuration/MergingStreams.html@@@Merging Streams@@@You can merge streams of data in a pipeline by connecting two or more stages to the same downstream stage. When you merge streams of data, the Data Collector channels the data from all streams to the same stage, but does not perform a join of records in the stream...";
fil["29"]= "Pipeline_Configuration/PipelineConfiguration_title.html@@@Pipeline Configuration@@@...";
fil["30"]= "Pipeline_Configuration/PipelineProperties.html@@@Pipeline Properties@@@When you configure a pipeline, you define how you want data to be treated: Do you want to prevent the loss of data, or do you want to prevent the duplication of dat...";
fil["31"]= "Pipeline_Configuration/What_isa_Pipeline.html@@@What is a Pipeline?@@@A pipeline describes the data flow for the Data Collector...";
fil["32"]= "Pipeline_Maintenance/DeletingAPipeline.html@@@Deleting a Pipeline@@@You can delete a pipeline when you no longer need it. Deleting a pipeline is permanent. If you think you might want to archive a pipeline, you might export the pipeline before you delete it...";
fil["33"]= "Pipeline_Maintenance/DuplicatingAPipeline.html@@@Duplicating a Pipeline@@@Duplicate a pipeline when you want to keep the existing version of a pipeline while continuing to configure a duplicate version. A duplicate is an exact copy of the original pipeline...";
fil["34"]= "Pipeline_Maintenance/ExportingAPipeline.html@@@Exporting a Pipeline@@@Export a pipeline when you want to use the pipeline with another Data Collector. You might also export a pipeline as a safeguard before you upgrade the Data Collector...";
fil["35"]= "Pipeline_Maintenance/ImportingAPipeline.html@@@Importing a Pipeline@@@Import a pipeline to use a pipeline developed on a different Data Collector. When you import a pipeline, you create a pipeline and then import the pipeline...";
fil["36"]= "Pipeline_Maintenance/PipelineMaintenance_title.html@@@Pipeline Maintenance@@@...";
fil["37"]= "Pipeline_Maintenance/StartingAPipeline.html@@@Starting a Pipeline@@@You can start a pipeline when it is valid. When you start a pipeline, the Data Collector runs the pipeline until you stop the pipeline or shut down the Data Collector...";
fil["38"]= "Pipeline_Maintenance/StoppingAPipeline.html@@@Stopping a Pipeline@@@Stop a pipeline when you want the Data Collector to stop processing data for the pipeline...";
fil["39"]= "Pipeline_Monitoring/PipelineMonitoring.html@@@Pipeline Monitoring@@@When the Data Collector runs a pipeline, you can view real-time statistics about the pipeline and examine a sampling of the data being processed. Monitor a pipeline to verify that the pipeline processes data as expected, to view a sample of the current data, or to create alerts...";
fil["40"]= "Pipeline_Monitoring/PipelineMonitoring_title.html@@@Pipeline Monitoring@@@...";
fil["41"]= "Pipeline_Monitoring/ReviewingSnapshotData.html@@@Reviewing a Snapshot of Data@@@You can review a snapshot of data that passes through the pipeline. When you request a snapshot, the Data Collector takes a snapshot of the data being processed. You can then review the snapshot stage by stage or through a set of stages, like data preview...";
fil["42"]= "Pipeline_Monitoring/ViewingPipelineStageStatistics.html@@@Viewing Pipeline and Stage Statistics@@@When you monitor a pipeline, you can view real-time summary and error statistics for the pipeline and for stages in the pipeline. You can view the configuration of the pipeline or selected stage to help determine if you need to make changes. You can also view the run history for the pipeline...";
fil["43"]= "Processors/BasicSyntax.html@@@Basic Syntax@@@Precede all expressions with a dollar sign and enclose them with curly brackets, as follows: ${&lt;expression&gt...";
fil["44"]= "Processors/CallingFieldNames.html@@@Calling Field Names@@@To use a field name in an expression, use the following convention: record:value( /&lt;field name&gt; ) For example, the following expression add the values from the SALARY field with values from the BONUS...";
fil["45"]= "Processors/ConfiguringExpressionsConditions.html@@@Configuring Expressions and Conditions@@@Use the expression language to configure expressions and conditions. You can configure expressions in the Expression processor. You can configure conditions in the Stream Selector processor...";
fil["46"]= "Processors/DefiningConstants.html@@@Defining Constants@@@You can define constants that you can reuse within a processor. Define a constant when you have a constant value that you want use more than once in the processor or that you want to be able to update easily. You can define constants in the Expression and Stream Selector processors...";
fil["47"]= "Processors/Expression.html@@@Expression@@@The Expression processor performs calculations on incoming data on a row-by-row basis. It writes the results of the calculations to a new field in the pipeline...";
fil["48"]= "Processors/FieldConverter.html@@@Field Converter@@@Configure a Field Converter to convert the data type of a field...";
fil["49"]= "Processors/FieldHasher.html@@@Field Hasher@@@Configure a Field Hasher to encode sensitive dat...";
fil["50"]= "Processors/FieldMasker.html@@@Field Masker@@@Configure a Field Masker to mask sensitive dat...";
fil["51"]= "Processors/FieldRemover.html@@@Field Remover@@@Use a Field Remover to remove unwanted fields from the pipeline...";
fil["52"]= "Processors/FieldSplitter-Configuring.html@@@Configuring a Field Splitter@@@Configure a Field Splitter to split data from a single field into multiple fields. You can split data from a single field. To split additional fields, add another Field Splitter to the pipeline...";
fil["53"]= "Processors/FieldSplitter.html@@@Field Splitter@@@The Field Splitter splits string data in a field based on a separator character and passes the separated data to new fields. Use the Field Splitter to split compound string values into individual components...";
fil["54"]= "Processors/Processors_overview.html@@@Processors@@@A required field must exist in a record to keep it in the pipeline. When a record does not include a required field, the processor drops the record. You can configure required fields for any processor stage...";
fil["55"]= "Processors/Processors_title.html@@@Processors@@@...";
fil["56"]= "Processors/StreamSelector.html@@@Stream Selector@@@Use a Stream Selector to route data to different streams...";
fil["57"]= "Troubleshooting/Troubleshooting.html@@@Troubleshooting@@@We hope the following troubleshooting tips might help you with any issues you might be having. If you have suggestions for additional troubleshooting items, please send them to docs@streamsets.com...";
fil["58"]= "Troubleshooting/Troubleshooting_title.html@@@Troubleshooting@@@...";
