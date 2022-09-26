1. Linux Crontab Format
MIN HOUR DOM MON DOW CMD

Field    Description    Allowed Value
MIN      Minute field    0 to 59
HOUR     Hour field      0 to 23
DOM      Day of Month    1-31
MON      Month field     1-12
DOW      Day Of Week     0-6
CMD      Command         Any command to be executed.

2. Scheduling a Job For a Specific Time
This will execute the Full backup shell script (full-backup) on 10th June 08:30 AM.

30 08 10 06 * /home/maverick/full-backup (The time field uses 24 hours format. So, for 8 AM use 8, and for 8 PM use 20)

3. Where the crontab file will be located
In /var/spool/cron/ directory, one file will be created with the username, for each user one crontba file
will be created here, after craeting the crontab from that user.
crontab -e will open this file

4. How to list the created crontabs
crontab -l

5. How to craete or edit a crontab
crontab -e will open the /var/spool/cron/username file, we have the add the crontab command in that file
* * * * * /home/user/shell_script

6. To view root user crontabs
Login to root user (su - root) and do crontab -l

7. To view crontab entries of other Linux users
Login to root and use -u {username} -l.

8. To schedule a job for more than one time (e.g. Twice a Day)
00 11, 16 * * * /home/maverick/bin/incremental-backup

00 – 0th Minute (Top of the hour)
11, 16 – 11 AM and 4 PM
* – Every day
* – Every month
* – Every day of the week

9. To schedule a job for certain range of time (e.g. Only on Weekdays)
If you wanted a job to be scheduled for every hour with in a specific range of time then use the following.

Cron Job everyday during working hours :
This example checks the status of the database everyday (including weekends) during the working hours 9 a.m – 6 p.m
00 09-18 * * * /home/maverick/bin/check-db-status
00 – 0th Minute (Top of the hour)
09-18 – 9 am, 10 am, 11 am, 12 am, 1 pm, 2 pm, 3 pm, 4 pm, 5 pm, 6 pm
* – Every day
* – Every month
* – Every day of the week

Cron Job every weekday during working hours :
This example checks the status of the database every weekday (i.e excluding Sat and Sun) during the working hours 9 a.m – 6 p.m.
00 09-18 * * 1-5 /home/maverick/bin/check-db-status
00 – 0th Minute (Top of the hour)
09-18 –-> 9 am, 10 am, 11 am, 12 am, 1 pm, 2 pm, 3 pm, 4 pm, 5 pm, 6 pm
* – Every day
* – Every month
1-5 -Mon, Tue, Wed, Thu and Fri (Every Weekday)

10 To schedule a background Cron job for every 10 minutes.
*/10 * * * * /home/maverick/check-disk-space

11 To schedule a job for first minute of every year using @yearly
There are special cases in which instead of the above 5 fields you can use @ followed by a keyword — such as reboot, midnight, yearly, hourly.
Keyword    Equivalent
@yearly    0 0 1 1 *
@daily     0 0 * * *
@hourly    0 * * * *
@reboot    Run at startup.

@yearly /home/maverick/bin/annual-maintenance

12 To schedule a Cron job beginning of every month using @monthly
This will execute the shell script tape-backup at 00:00 on 1st of every month.
@monthly /home/maverick/bin/tape-backup

13 To schedule a background job every day using @daily
This will do a daily log file cleanup using cleanup-logs shell script at 00:00 on every day.
@daily /home/maverick/bin/cleanup-logs "day started"

14 To execute a linux command after every reboot using @reboot
This will execute the specified command once after the machine got booted every time.
@reboot CMD

15 How to see the logs of crontab
journalctl -t CROND | tail -20
Or it will be stored in /var/log/ dierctory also
