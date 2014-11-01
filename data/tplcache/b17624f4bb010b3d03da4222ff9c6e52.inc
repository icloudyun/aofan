<ul id="navul" class="cl"> 
<!--注意下一行的标签，不是[field:??/]这种，而是{dede:field.??/}这种--> 
<li><a href="{dede:field name="typeurl"/}" target="_blank">{dede:field name="typename"/}</a> 
<ul class="ddsubmenustyle" style="z-index: 2000; visibility: hidden;"> 
{dede:channel type="son"} 
<li><a href="[field:typeurl/]" title="HTML">[field:typename/]</a></li> 
{/dede:channel} 
</ul> 
</li> 
</ul>