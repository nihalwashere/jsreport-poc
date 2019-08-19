module.exports = `
<style>
        table {
            margin: 20px auto;
            table-layout: fixed;
            width: 8677px;
        }

        table td>div {
            overflow: hidden;
            height: 20px;
        }

        table,
        td,
        th {
            border-collapse: collapse;
        }

        th,
        td {
            padding: 10px;
            border: solid 1px;
            text-align: left;
        }
    </style>

    <table>
        <tr>
            <th width="300px">Property Title</th>
            <th width="300px">Address</th>
            <th width="200px">City</th>
            <th width="200px">Country Code</th>
            <th width="100px">Bedrooms</th>
            <th width="100px">Bathrooms</th>
            <th width="150px">Property Type</th>
            <th width="300px">Access Information</th>
            <th width="300px">Garbage Information</th>
            <th width="300px">Parking information</th>
            <th width="200px">Wifi Name</th>
            <th width="200px">Wifi Password</th>
            <th width="300px">Wifi Description</th>
            <th width="300px">Important Information</th>
            <th width="200px">Job Title</th>
            <th width="200px">Job Type</th>
            <th width="100px">Total Cost</th>
            <th width="100px">Billable Time</th>
            <th width="100px">Total Mileage</th>            
            <th width="150px">Job Sent Date</th>
            <th width="150px">Scheduled Start Date</th>
            <th width="150px">Scheduled End Date</th>
            <th width="150px">Scheduled Time</th>
            <th width="150px">Scheduled Duration (mins)</th>
            <th width="150px">Actual Start Date</th>
            <th width="150px">Actual End Date</th>
            <th width="150px">Actual Time</th>
            <th width="150px">Actual Start Time</th>
            <th width="150px">Actual End Time</th>
            <th width="200px">Duration</th>
            <th width="200px">Status of Request</th>
            <th width="300px">Message to Service Provider</th>
            <th width="150px">Offered Price</th>
            <th width="250px">Offered Price Currency</th>
            <th width="150px">Canceled By Me</th>
            <th width="200px">Canceled By Service Provider</th>
            <th width="200px">Name</th>
            <th width="150px">Time & Date</th>
            <th width="100px">Viewed</th>
            <th width="117px">Response</th>
            <th width="210px">Message from Service Provider</th>
            <th width="100px">Slides</th>
            <th width="100px">Tasks</th>
            <th width="150px">Verification Photos</th>
            <th width="150px">Problems Reported</th>
            <th width="300px">Problems Reported Notes</th>
            <th width="200px">Title</th>
            <th width="300px">Description</th>
            <th width="150px">Cost Type</th>
            <th width="100px">Cost Value</th>            
            <th width="150px">Cost Added By</th>
        </tr>

        {{#each jobRequest}}
        <tr>
            <td rowspan="4">
                <div>{{propertyname}}</div>
            </td>            
            <td rowspan="4">
                <div>{{address}}</div>
            </td>
            <td rowspan="4">
                <div>{{city}}</div>
            </td>
            <td rowspan="4">
                <div>{{countrycode}}</div>
            </td>
            <td rowspan="4">
                <div>{{bedrooms}}</div>
            </td>
            <td rowspan="4">
                <div>{{bathrooms}}</div>
            </td>
            <td rowspan="4">
                <div>{{propertytype}}</div>
            </td>
            <td rowspan="4">
                <div>{{accessinfo}}</div>
            </td>
            <td rowspan="4">
                <div>{{garbageinfo}}</div>
            </td>
            <td rowspan="4">
                <div>{{parkinginfo}}</div>
            </td>
            <td rowspan="4">
                <div>{{wifiname}}</div>
            </td>
            <td rowspan="4">
                <div>{{wifipassword}}</div>
            </td>
            <td rowspan="4">
                <div>{{wifidescription}}</div>
            </td>
            <td rowspan="4">
                <div>{{importantinfo}}</div>
            </td>
            <td rowspan="4">
                <div>{{job_title}}</div>
            </td>
            <td rowspan="4">
                <div>{{jobType}}</div>
            </td>
            <td rowspan="4">
                <div>{{totalCost}}</div>
            </td>
            <td rowspan="4">
                <div>{{billableTime}}</div>
            </td>
            <td rowspan="4">
                <div>{{totalMileage}}</div>
            </td>
            <td rowspan="4">
                <div>{{jobsenddate}}</div>
            </td>
            <td rowspan="4">
                <div>{{schedulestart}}</div>
            </td>
            <td rowspan="4">
                <div>{{scheduleend}}</div>
            </td>
            <td rowspan="4">
                <div>{{scheduletime}}</div>
            </td>
            <td rowspan="4">
                <div>{{scheduleduration}}</div>
            </td>
            <td rowspan="4">
                <div>{{actualstartdate}}</div>
            </td>
            <td rowspan="4">
                <div>{{actualenddate}}</div>
            </td>
            <td rowspan="4">
                <div>{{actualtime}}</div>
            </td>
            <td rowspan="4">
                <div>{{actualstarttime}}</div>
            </td>
            <td rowspan="4">
                <div>{{actualendtime}}</div>
            </td>
            <td rowspan="4">
                <div>{{duration}}</div>
            </td>
            <td rowspan="4">
                <div>{{statusofrequest}}</div>
            </td>
            <td rowspan="4">
                <div>{{msgtoserviceprovider}}</div>
            </td>
            <td rowspan="4">
                <div>{{offeredprice}}</div>
            </td>
            <td rowspan="4">
                <div>{{offeredpricecurrency}}</div>
            </td>
            <td rowspan="4">
                <div>{{canceledbyme}}</div>
            </td>
            <td rowspan="4">
                <div>{{canceledbyserviceprovider}}</div>
            </td>
            <td rowspan="4">
                <div>{{name}}</div>
            </td>
            <td rowspan="4">
                <div>{{timedate}}</div>
            </td>
            <td rowspan="4">
                <div>{{viewed}}</div>
            </td>
            <td rowspan="4">
                <div>{{response}}</div>
            </td>
            <td rowspan="4">
                <div>{{msgfromserviceprovider}}</div>
            </td>
            <td rowspan="4">
                <div>{{slides}}</div>
            </td>
            <td rowspan="4">
                <div>{{tasks}}</div>
            </td>
            <td rowspan="4">
                <div>{{verificationphotos}}</div>
            </td>
            <td rowspan="4">
                <div>{{problemsreported}}</div>
            </td>
            <td rowspan="4">
                <div>{{problemslist}}</div>
            </td>
            <td rowspan="4">
                <div>{{title}}</div>
            </td>
            <td rowspan="4">
                <div>{{description}}</div>
            </td>    

            {{#each costs}}                
                    <td>{{type}}</td>
                    <td>{{value}}</td>                    
                    <td>{{reporterName}}</td>
                </tr>
            {{/each}}
        {{/each}}
</table>`;
